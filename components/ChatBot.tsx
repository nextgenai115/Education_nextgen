'use client';

import { useEffect, useState } from 'react';

export default function ChatBot() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Avoid double-initialisation on hot reloads
    if (document.getElementById('n8n-chat-script')) {
      setIsLoaded(true);
      return;
    }

    // Get webhook URL from environment variable or use default
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || 
      'https://n8n.nextgenaiautomation.net/webhook/680ac075-1f23-4980-a428-cc36763b8f76/chat';

    // 1. Inject the n8n chat stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // 2. Inject the chat bundle as a real <script type="module">
    const script = document.createElement('script');
    script.id = 'n8n-chat-script';
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '${webhookUrl}',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
          'Hello! Welcome to NextGen AI Automation Academy.',
          'I\'m your AI assistant, here to help you with:',
          '• Course information and curriculum details',
          '• Enrollment guidance and requirements',
          '• Career opportunities in AI automation',
          '• Technical support and resources',
          'How may I assist you today?'
        ],
        i18n: {
          en: {
            title: 'NextGen AI Assistant',
            subtitle: 'Professional AI Automation Support',
            footer: 'Powered by NextGen AI',
            getStarted: 'Start Conversation',
            inputPlaceholder: 'Ask about courses, enrollment, or careers...',
            close: 'Close Chat',
            send: 'Send',
          },
        },
        theme: {
          font: 'Inter, system-ui, sans-serif',
          avatar: {
            src: '/nextgen-ai-logo.37c8a695.png',
            alt: 'NextGen AI Logo',
          },
        },
      });
    `;
    document.body.appendChild(script);

    // Mark as loaded
    setIsLoaded(true);

    // 3. Override the widget's default red colour with the site violet
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --chat--color-primary: #7c3aed;
        --chat--color-primary-shade-50: #8b5cf6;
        --chat--color-primary-shade-100: #6d28d9;
        --chat--color-secondary: #7c3aed;
        --chat--color-secondary-shade-50: #8b5cf6;
        --chat--color-text: #1f2937;
        --chat--color-text-light: #6b7280;
        --chat--color-background: #ffffff;
        --chat--color-background-shade-50: #f9fafb;
        --chat--color-background-shade-100: #f3f4f6;
        --chat--font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }
      .n8n-chat-widget {
        font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
