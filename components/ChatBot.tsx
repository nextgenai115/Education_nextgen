'use client';

import { useEffect } from 'react';

export default function ChatBot() {
  useEffect(() => {
    // Inject the n8n chat stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Dynamically import and initialise the n8n chat widget
    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js' as any).then(
      (module: any) => {
        const createChat = module.createChat ?? module.default?.createChat;
        if (createChat) {
          createChat({
            webhookUrl:
              'https://n8n.nextgenaiautomation.net/webhook/680ac075-1f23-4980-a428-cc36763b8f76/chat',
            // Override the default red primary colour to match site theme
            style: {
              '--chat--color-primary': '#a78bfa',
              '--chat--color-primary-shade-50': '#9070f0',
              '--chat--color-primary-shade-100': '#7c5cbf',
              '--chat--color-secondary': '#a78bfa',
              '--chat--color-secondary-shade-50': '#9070f0',
            },
          });
        }
      }
    );
  }, []);

  return null;
}
