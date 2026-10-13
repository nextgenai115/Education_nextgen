'use client';

import { useEffect } from 'react';

export default function ChatBot() {
  useEffect(() => {
    if (document.getElementById('n8n-chat-script')) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.id = 'n8n-chat-script';
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://n8n.nextgenaiautomation.net/webhook/680ac075-1f23-4980-a428-cc36763b8f76/chat'
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}
