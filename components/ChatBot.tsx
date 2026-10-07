'use client';

import { useEffect } from 'react';

export default function ChatBot() {
  useEffect(() => {
    // Avoid double-initialisation on hot reloads
    if (document.getElementById('n8n-chat-script')) return;

    // 1. Inject the n8n chat stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // 2. Inject the chat bundle as a real <script type="module">
    //    This is the exact pattern from the n8n docs — dynamic import()
    //    of a remote URL is blocked by webpack, so we use a script tag instead.
    const script = document.createElement('script');
    script.id = 'n8n-chat-script';
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n.nextgenaiautomation.net/webhook/680ac075-1f23-4980-a428-cc36763b8f76/chat',
      });
    `;
    document.body.appendChild(script);

    // 3. Override the widget's default red colour with the site violet
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --chat--color-primary: #a78bfa;
        --chat--color-primary-shade-50: #9070f0;
        --chat--color-primary-shade-100: #7c5cbf;
        --chat--color-secondary: #a78bfa;
        --chat--color-secondary-shade-50: #9070f0;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
