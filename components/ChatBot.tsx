'use client';

import { useEffect } from 'react';

// NEXT_PUBLIC_ prefix is required: this runs in the browser. Set it in Vercel
// (Production + Preview) and REDEPLOY — Next.js inlines it at build time.
// Keep this separate from N8N_WEBHOOK_URL, which is the enrollment webhook.
const CHAT_URL =
  process.env.NEXT_PUBLIC_N8N_CHAT_URL ||
  'https://n8n.nextgenaiautomation.net/webhook/680ac075-1f23-4980-a428-cc36763b8f76/chat';

// Pinned. Un-versioned "@n8n/chat" floats to whatever was published last
// (1.41.5 shipped on 2026-10-12) and its CSS variable names have already changed once.
const CDN = 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.41.5/dist';

export default function ChatBot() {
  useEffect(() => {
    if (document.getElementById('n8n-chat-script')) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${CDN}/style.css`;
    link.onerror = () => console.error('[ChatBot] could not load widget CSS', link.href);
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.id = 'n8n-chat-script';
    script.type = 'module';
    script.textContent = `
      import('${CDN}/chat.bundle.es.js')
        .then(({ createChat }) => {
          createChat({
            webhookUrl: ${JSON.stringify(CHAT_URL)},
            mode: 'window',
            showWelcomeScreen: true,
            // enableStreaming: true, // only if the Chat Trigger response mode is "Streaming"
            initialMessages: ['Welcome to NextGen AI Automation!!! How can I help you today?'],
            i18n: {
              en: {
                title: 'NextGen AI',
                subtitle: 'How can I help you today?',
                footer: '',
                getStarted: 'Start Chat',
                inputPlaceholder: 'Type your message...',
              },
            },
          });
        })
        .catch((e) => console.error('[ChatBot] widget failed to load', e));
    `;
    document.body.appendChild(script);

    // Variable names match @n8n/chat >= 1.x (double dash after "color").
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --chat--color--primary: #a78bfa;
        --chat--color--primary-shade-50: #9070f0;
        --chat--color--primary--shade-100: #7c5cbf;
        --chat--color--secondary: #a78bfa;
        --chat--color-secondary-shade-50: #9070f0;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
