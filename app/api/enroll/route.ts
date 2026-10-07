interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  submittedAt?: string;
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

export async function POST(request: Request) {
  try {
    const data: EnrollmentData = await request.json();

    if (!data.name || !data.email || !data.phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert to IST (UTC+5:30)
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);
    const submittedAt = istTime.toISOString().replace('T', ' ').replace('Z', '') + ' IST';

    // Send to n8n — handles Google Sheets + Email
    await sendToGoogleSheets({ ...data, submittedAt });

    return Response.json({ success: true, message: 'Enrollment submitted successfully' });

  } catch (error) {
    console.error('Enrollment error:', error);
    return Response.json({ error: 'Failed to process enrollment' }, { status: 500 });
  }
}
