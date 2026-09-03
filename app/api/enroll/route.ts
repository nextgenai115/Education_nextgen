import { Resend } from 'resend';

interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  submittedAt?: string;
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not configured');
  }
  return new Resend(apiKey);
}

async function sendToGoogleSheets(data: EnrollmentData & { submittedAt: string }) {
  // Try n8n webhook first, fall back to direct Google Sheets webhook
  const n8nUrl = process.env.N8N_WEBHOOK_URL;
  const directUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookUrl = n8nUrl || directUrl;

  if (!webhookUrl) {
    console.warn('No webhook URL configured (N8N_WEBHOOK_URL or GOOGLE_SHEETS_WEBHOOK_URL), skipping');
    return;
  }
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        submittedAt: data.submittedAt,
      }),
    });
    const text = await response.text();
    console.log('Webhook response:', response.status, text);
  } catch (error) {
    console.error('Webhook error:', error);
  }
}

function generateEmailHTML(data: EnrollmentData): string {
  const promoCode = process.env.PROMO_CODE || 'NEXTGEN032';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #0d1117; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: linear-gradient(135deg, #1a1f4e, #2d3a8c); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px; }
    .header h1 { margin: 0 0 8px; font-size: 24px; color: #ffffff; }
    .header p { margin: 0; color: #93c5fd; font-size: 14px; }
    .discount-badge { display: inline-block; background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #000; font-weight: bold; font-size: 18px; padding: 8px 20px; border-radius: 8px; margin-bottom: 16px; }
    .content { background: #161b2e; border-radius: 12px; padding: 28px; margin-bottom: 16px; }
    .promo-box { background: linear-gradient(135deg, #1a1000, #2a1a00); border: 2px dashed rgba(255,197,100,0.5); border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0; }
    .promo-code { font-size: 28px; font-weight: bold; color: #ffc564; letter-spacing: 4px; font-family: monospace; }
    .footer { text-align: center; color: #475569; font-size: 12px; padding-top: 16px; }
    a { color: #60a5fa; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="discount-badge">20% OFF</div>
      <h1>Your Exclusive Discount Code</h1>
      <p>NextGen AI Automation - AI Program</p>
    </div>
    <div class="content">
      <p>Hi <strong>${data.name}</strong>,</p>
      <p>Thank you for your interest in the AI Unlocked — 5 Module Program. Here is your exclusive 20% discount promo code:</p>
      <div class="promo-box">
        <p style="margin:0 0 8px; color:#9aa5b8; font-size:12px; text-transform:uppercase; letter-spacing:2px;">Promo Code</p>
        <div class="promo-code">${promoCode}</div>
        <p style="margin:8px 0 0; color:#fbbf24; font-size:13px;">20% OFF — Valid for 30 days</p>
      </div>
      <p>Use this code at checkout to get 20% off the program price.</p>
      <p>If you have any questions, feel free to reach out to us.</p>
    </div>
    <div class="footer">
      <p>This is an automated notification from NextGen AI Automation.</p>
      <p>For questions, contact us at info@nextgenaiautomation.net</p>
      <p style="margin-top: 10px;">Promo code expires in 30 days. Terms and conditions apply.</p>
    </div>
  </div>
</body>
</html>`;
}

async function sendEnrollmentEmail(data: EnrollmentData) {
  try {
    const resend = getResendClient();
    const { data: resendData, error } = await resend.emails.send({
      from: "NextGen AI Automation <onboarding@resend.dev>",
      to: data.email,
      subject: `Your Exclusive 20% Discount Promo Code - NextGen AI Automation`,
      html: generateEmailHTML(data),
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("Email sent successfully via Resend, ID:", resendData?.id);
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const data: EnrollmentData = await request.json();

    if (!data.name || !data.email || !data.phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // n8n handles everything — Google Sheets + Email in one webhook call
    await sendToGoogleSheets({ ...data, submittedAt: new Date().toISOString() });

    return Response.json({ success: true, message: 'Enrollment submitted successfully' });

  } catch (error) {
    console.error('Enrollment error:', error);
    return Response.json({ error: 'Failed to process enrollment' }, { status: 500 });
  }
}
