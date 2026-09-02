export const brand = {
  name: "Omkar AI Innovation",
  tagline: "Be Automated · Be Ahead",
  subline: "Where Automation Meets Solution",
  site: "www.omkaraiinnovation.com",
  email: "omkaraiinnovation@gmail.com",
  phone: "7004583808",
  offices: [
    "Patna – 800029, Bihar, India",
    "Sector-99A, Manesar, Gurugram, Haryana – 122505",
  ],
  registrations: [
    { label: "Startup India Recognised", value: "IN-0226-9396QK" },
    { label: "Udyam Registered Enterprise", value: "UDYAM-BR-26-0220313" },
    { label: "MSME Micro Enterprise", value: "Govt. of India" },
  ],
  courseUrl: "https://www.omkaraiinnovation.com/courses/ai-unlocked-autonomous-agents",
};

export const pricing = {
  websitePrice: "4,999",
  partnerPrice: "3,999",
  note: "Exclusive pricing available only through NexGen AI Automation partnership.",
};

export const heroStats = [
  { value: "5+", label: "Comprehensive Modules" },
  { value: "20+", label: "Hands-On Projects" },
  { value: "0", label: "Coding Required To Start" },
  { value: "∞", label: "Business Applications" },
];

export const marketStats = [
  { value: "$1.8T", label: "AI Market by 2030" },
  { value: "40–60%", label: "Salary Premium" },
  { value: "97M+", label: "New AI Jobs" },
  { value: "85%", label: "Businesses Adopting AI" },
  { value: "99%", label: "No-Code & No-Keyboard Learning" },
  { value: "3x", label: "Productivity Boost with AI" },
  { value: "70%", label: "Tasks That Can Be Automated" },
  { value: "2.8B", label: "Processes Big Data in 2026" },
];

export const hierarchy = [
  { step: 1, title: "Artificial Intelligence", desc: "Machines performing human-like tasks" },
  { step: 2, title: "Machine Learning", desc: "AI that learns from data" },
  { step: 3, title: "Neural Networks", desc: "Brain-inspired connected layers" },
  { step: 4, title: "Deep Learning", desc: "Multi-layer complex problem solving" },
  { step: 5, title: "Generative AI", desc: "AI that creates text, images, code" },
  { step: 6, title: "AI Agents", desc: "Autonomous task-focused systems" },
  { step: 7, title: "Agentic AI", desc: "Multiple agents = an entire AI company" },
];

export type Module = {
  code: string;
  number: string;
  title: string;
  tags: string[];
  intro: string;
  coreLabel: string;
  core: string[];
  newLabel: string;
  newTopics: string[];
  handsOnLabel: string;
  handsOn: string[];
  outcome: string;
};

export const modules: Module[] = [
  {
    code: "M1",
    number: "01",
    title: "The AI Foundation",
    tags: ["Live Workshops", "Real Projects", "Certificate"],
    intro: "Before you touch a tool — understand the mind behind the machine.",
    coreLabel: "Core Topics",
    core: [
      "What AI is — explained without jargon",
      "AI vs Machine Learning vs Generative AI",
      "Types of AI: Narrow, General & Super",
      "AI ecosystem, key players & landscape",
      "AI myths, fears & ground reality",
      "AI in everyday life — real use cases",
    ],
    newLabel: "LLMs Deep Dive",
    newTopics: [
      "How an LLM is trained",
      "Transformer architecture, simplified",
      "Tokens, context windows & parameters",
      "Pre-training vs Fine-tuning vs RLHF",
      "Open-source vs commercial LLMs",
      "Hallucinations, bias & responsible use",
    ],
    handsOnLabel: "Hands-On",
    handsOn: [
      "Compare GPT, Claude & Gemini on one prompt",
      "Stress-test context windows with long documents",
      "Mini-project: LLM comparison report for your industry",
    ],
    outcome:
      "Navigate any AI conversation — technical or boardroom — with rock-solid clarity and zero confusion.",
  },
  {
    code: "M2",
    number: "02",
    title: "Generative AI Toolkit",
    tags: ["Live Workshops", "Real Projects", "Certificate"],
    intro: "One prompt, engineered right, beats a thousand average attempts.",
    coreLabel: "Core Topics",
    core: [
      "Text generation: emails, posts & ads",
      "Image creation for marketing & education",
      "Video generation fundamentals",
      "Audio & voice synthesis overview",
      "AI content strategy & workflows",
      "Content repurposing with Gen AI",
    ],
    newLabel: "Prompt Engineering + RAG",
    newTopics: [
      "Prompt anatomy: role, context, instruction",
      "Zero-shot, few-shot, chain-of-thought",
      "Structured output (JSON, XML, Markdown)",
      "RAG pipeline architecture & chunking",
      "Embeddings & vector DBs (Pinecone, Chroma)",
      "Graph RAG, multimodal RAG & evaluation",
    ],
    handsOnLabel: "Hands-On",
    handsOn: [
      "Build a reusable prompt library across 4 domains",
      "Ingest custom documents into a vector database",
      "Capstone: RAG-powered Q&A chatbot on a business knowledge base",
    ],
    outcome:
      "Design prompts and RAG systems that transform AI from a toy into a professional-grade business engine.",
  },
  {
    code: "M3",
    number: "03",
    title: "AI Automation",
    tags: ["Live Workshops", "Real Projects", "Certificate"],
    intro: "Stop doing manually what a workflow can do for you at midnight.",
    coreLabel: "Core Topics",
    core: [
      "Automation logic, triggers & opportunities",
      "n8n workflow building — comprehensive",
      "Automating email, schedules & data pipelines",
      "Error handling & fallback logic",
      "Connecting AI models to flows",
      "Automation ROI measurement",
    ],
    newLabel: "API Integration + MCP",
    newTopics: [
      "REST, GraphQL & WebSockets explained",
      "Auth: API keys, OAuth 2.0, JWT",
      "Claude, OpenAI & Gemini API patterns",
      "Webhooks, rate limits & pagination",
      "MCP architecture: hosts, clients, servers",
      "Custom MCP tools + Claude Desktop",
    ],
    handsOnLabel: "Hands-On",
    handsOn: [
      "Lead capture: webhook → Sheets → Gmail API",
      "WhatsApp bot connected to AI via API",
      "Capstone: MCP-enabled AI automation agent for a real business",
    ],
    outcome:
      "Build intelligent automations that connect AI to the real world — no-code to low-code, triggered and unstoppable.",
  },
  {
    code: "M4",
    number: "04",
    title: "AI ChatBot & AI Agents",
    tags: ["Live Workshops", "Real Projects", "Certificate"],
    intro: "A chatbot answers. An AI Agent thinks, plans, and acts — without you.",
    coreLabel: "Core Topics",
    core: [
      "Chatbots vs AI Agents — key distinctions",
      "How agents think, plan & act",
      "Memory: in-context, external & episodic",
      "Patterns: ReAct, Plan-and-Execute",
      "Supervisor & worker architectures",
      "Voice AI agents & human-in-the-loop",
    ],
    newLabel: "Agent Builder Workshop",
    newTopics: [
      "Multi-step research agent that compiles reports",
      "Support bot with FAQ & escalation logic",
      "Multi-agent pipeline: research → draft → review",
      "Voice-enabled agent for inbound inquiries",
      "Deployment, monitoring & troubleshooting",
      "Agent evaluation & benchmarking",
    ],
    handsOnLabel: "Hands-On",
    handsOn: ["Capstone: autonomous lead qualification agent for a real business"],
    outcome:
      "Deploy autonomous AI systems that handle customer support, research, and lead qualification — 24/7, zero fatigue.",
  },
  {
    code: "M5",
    number: "05",
    title: "Live Autonomous Systems",
    tags: ["Live Workshops", "Real Projects", "Certificate"],
    intro: "Deploy real AI products the world can see, use, and pay for.",
    coreLabel: "Core Topics",
    core: [
      "Live chatbot build & demonstration",
      "End-to-end autonomous workflow walkthrough",
      "Voice AI agent in action",
      "MCP-powered AI assistant live demo",
      "RAG knowledge-base Q&A live demo",
      "Scalability insights & ROI analysis",
    ],
    newLabel: "Claude Code App + AI Avatar",
    newTopics: [
      "VS Code + Claude Code setup in 10 minutes",
      "Build a web app with plain-language instructions",
      "One-click deployment on Vercel",
      "Talking AI avatar from your photo & voice",
      "Train avatar on brand voice & FAQs",
      "Deploy avatar to WhatsApp, email & website",
    ],
    handsOnLabel: "Hands-On",
    handsOn: [
      "Deploy your own AI-powered mini web app",
      "Ship a professional AI avatar working 24/7",
    ],
    outcome:
      "Walk away with live, deployed AI products — a working web app, an AI Avatar, and a portfolio that speaks louder than any resume.",
  },
];

export const demo = {
  repetitive: {
    title: "Repetitive Work Automation",
    items: ["AI Chatbot", "AI Voice Agent", "WhatsApp Bot", "Email Automation Bot", "Lead Capture Bot"],
  },
  social: {
    title: "Social Media Automation",
    items: ["Facebook Automation", "LinkedIn Automation", "Discord Automation", "Instagram Automation", "YouTube Automation"],
  },
};

export const income = [
  { title: "Prompt Engineering", desc: "The language of AI — high-demand, high-pay skill." },
  { title: "UGC Creation", desc: "Global brands pay in dollars for AI-made content." },
  { title: "AI Content Creation", desc: "Text, images, video & code at unmatched speed." },
  { title: "AI Consultancy", desc: "Help businesses adopt & scale AI systems." },
  { title: "AI Agencies", desc: "Build & sell AI services to clients at scale." },
  { title: "AI Automation Services", desc: "Deploy bots & workflows businesses need now." },
  { title: "AI Freelancing", desc: "Remote, global, high-income project work." },
  { title: "AI Business Models", desc: "Launch and scale your own AI-powered venture." },
];

export const whyUs = [
  { title: "Live Mentorship", desc: "Direct guidance from industry practitioners — not just recorded videos." },
  { title: "Real Projects", desc: "Deploy chatbots, agents & automation straight to production." },
  { title: "AI Community", desc: "A network of peers, collaborators and job referrals." },
  { title: "MSME Certificate", desc: "Govt-recognised credential — Startup India verified." },
  { title: "Career Launchpad", desc: "40–60% salary premium for AI-skilled professionals." },
  { title: "Global Opportunities", desc: "UGC, freelance and remote AI roles worldwide." },
];

export const certification = {
  intro:
    "After completing all five modules, required projects and assessments, learners can receive an official Certificate of Completion issued by Omkar AI Innovation.",
  details: [
    { label: "Format", value: "Official Certificate of Completion" },
    { label: "Issuer", value: "Omkar AI Innovation (MSME Registered)" },
    { label: "Status", value: "Startup India Recognised" },
    { label: "Recognition", value: "Udyam-registered MSME Micro Enterprise" },
    { label: "Mentorship", value: "Live Workshops & AI Community" },
    { label: "Career", value: "Freelance & Remote Opportunities" },
  ],
  eligibility: [
    "Complete all 5 modules, projects and assessments",
    "Attend at least 80% of live workshops",
    "Submit hands-on project per module",
    "Pass assessments with at least 60%",
    "Complete the final capstone project",
  ],
};

export const faq = [
  {
    q: "What is Omkar AI Innovation and what does the program teach?",
    a: "Omkar AI Innovation is an AI-focused practical learning program designed to take learners from AI fundamentals to building and deploying real AI systems. The program covers five core areas: AI Foundation, Generative AI Toolkit, AI Automation, ChatBots & AI Agents, and Live Autonomous Systems. It focuses on practical implementation rather than theory alone.",
  },
  {
    q: "What are the five modules included in the program?",
    a: "Module 1 — AI Foundation: AI, Machine Learning, Generative AI, LLMs, AI ecosystem, ethics and practical AI use cases. Module 2 — Generative AI Toolkit: Prompt Engineering, text/image/video generation, RAG, structured outputs and AI content workflows. Module 3 — AI Automation: n8n, APIs, webhooks, AI workflows, WhatsApp automation, Google Workspace integrations and MCP. Module 4 — ChatBots & AI Agents: AI agents, memory, tool use, ReAct, multi-agent systems, voice agents and lead-generation automation. Module 5 — Live Autonomous Systems: AI web apps, Claude Code, AI avatars, RAG systems, MCP-powered assistants and live AI deployments.",
  },
  {
    q: "Will I learn Generative AI, Prompt Engineering and RAG?",
    a: "Yes. The Generative AI Toolkit covers text, images, video, audio and content workflows along with professional Prompt Engineering. Learners work with zero-shot, few-shot, structured outputs, system prompts, persona design and prompt optimisation. The program also teaches RAG, including vector databases, embeddings, semantic search and building a RAG-powered Q&A chatbot using custom business knowledge.",
  },
  {
    q: "What kind of AI automation will I learn?",
    a: "You will learn how to automate repetitive business processes using no-code and low-code workflows, particularly with n8n. The curriculum includes API integration, webhooks, email and data automation, Claude/OpenAI/Gemini integrations, Google Sheets and Gmail workflows, CRM basics and WhatsApp Business API. Practical projects include lead capture, WhatsApp bots, AI newsletter generation and end-to-end AI workflows.",
  },
  {
    q: "What are AI Agents, and will I actually build them?",
    a: "Yes. The program goes beyond basic chatbots and teaches AI Agents that can reason, plan, use tools and complete multi-step tasks. You will learn ReAct and Plan-and-Execute patterns, memory, function calling, multi-agent orchestration, supervisor-worker architectures, Human-in-the-Loop workflows and Voice AI Agents. Practical builds include research agents, customer-support bots, multi-agent pipelines, voice agents and an autonomous lead-qualification agent.",
  },
  {
    q: "Will I need coding experience to join the program?",
    a: "No prior coding expertise is required to get started. The program includes no-code/low-code automation, and the Claude Code track specifically teaches learners to build functional and mobile-ready web apps using plain-language instructions without traditional coding. The program is designed to make advanced AI concepts accessible while gradually introducing technical concepts such as APIs and MCP.",
  },
  {
    q: "Is the learning practical, or is it mainly theory and recorded videos?",
    a: "The program is strongly practical. It includes live workshops, real-world projects, hands-on builds and demonstrations. The curriculum includes deployable projects such as RAG chatbots, automation workflows, AI agents, web apps and AI avatars, with 20+ hands-on projects and deployable capstones rather than learning only for a certificate.",
  },
  {
    q: "What will I be able to build after completing the program?",
    a: "You can build practical AI solutions such as AI chatbots, WhatsApp bots, lead-generation systems, automated business workflows, RAG knowledge-base assistants, multi-agent systems, voice AI agents, AI-powered web applications and professional AI avatars. Module 5 brings LLMs, RAG, APIs, MCP and Agents together into working systems that can be demonstrated to clients, employers or businesses.",
  },
  {
    q: "What certificate, mentorship and career-related benefits are included?",
    a: "After completing all five modules, required projects and assessments, learners can receive an official Certificate of Completion issued by Omkar AI Innovation. Eligibility includes completing all modules, attending at least 80% of live workshops, submitting module projects, passing assessments with at least 60%, and completing the final capstone. The program is also built around live mentorship, real projects, an AI community, career opportunities and a portfolio of working AI systems.",
  },
  {
    q: "Why should I learn AI now, and where can I learn more about Omkar AI Innovation?",
    a: "AI is rapidly expanding across business, content, automation, customer support, research and digital products. The program is built around tools used in practical AI workflows, including n8n, Claude, GPT, Gemini, HeyGen and Vercel, spanning automation, AI agents and AI-powered products. Omkar AI Innovation is a Startup India recognised and Udyam-registered MSME Micro Enterprise, headquartered in Patna, Bihar. Website: omkaraiinnovation.com.",
  },
];
