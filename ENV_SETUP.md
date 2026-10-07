# Environment Configuration for Email Service

To enable automatic email notifications for enrollment forms, you need to configure the Resend email service.

## Setup Instructions

1. **Sign up for Resend**
   - Go to https://resend.com and create a free account
   - Get your API key from the dashboard

2. **Add Environment Variables**
   Create a `.env.local` file in the project root with the following:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **Configure Email Sender**
   - In Resend dashboard, verify your domain (e.g., omkaraiinnovation.com)
   - Or use the default Resend domain for testing

4. **Update the API Route**
   Uncomment the Resend integration in `app/api/enroll/route.ts`
   Update the `from` email address to match your verified domain

## Alternative Email Services

If you prefer not to use Resend, you can integrate:
- SendGrid
- AWS SES
- Nodemailer with SMTP
- Any other email service

The API route is structured to easily swap email providers.

## Current Status

The enrollment form is fully functional with:
- Form validation
- Loading states
- Success/error handling
- Console logging (for development)

Email notifications will be enabled once you configure the environment variables and uncomment the email service integration.
