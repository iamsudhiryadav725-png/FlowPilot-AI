export const marketingNav = [
  { label: 'Features', href: '/features' },
  { label: 'Automation', href: '/automation' },
  { label: 'AI', href: '/ai' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

export const dashboardStats = [
  { label: 'Total leads', value: '2,486', delta: '+12.4%' },
  { label: 'New customers', value: '184', delta: '+8.1%' },
  { label: 'Automation runs', value: '14,802', delta: '+21.9%' },
  { label: 'Success rate', value: '96.2%', delta: '+1.8%' },
  { label: 'AI usage', value: '38.5K', delta: '+16.7%' },
  { label: 'Revenue', value: '$142.8K', delta: '+9.4%' },
];

export const revenueSeries = [42, 58, 49, 76, 63, 88, 101, 95, 119, 132, 128, 146];
export const workflowStates = [
  { name: 'New Lead', percent: 92, tone: 'emerald' },
  { name: 'Lead Qualification', percent: 81, tone: 'blue' },
  { name: 'Customer Welcome', percent: 73, tone: 'violet' },
  { name: 'Invoice processing', percent: 64, tone: 'amber' },
];

export const leads = [
  { name: 'Maya Patel', company: 'Northstar Studio', score: 88, status: 'Qualified' },
  { name: 'Ethan Ross', company: 'Blue Harbor', score: 72, status: 'Contacted' },
  { name: 'Olivia Chen', company: 'Aster Labs', score: 94, status: 'Proposal' },
  { name: 'Noah Rivera', company: 'Peak Commerce', score: 65, status: 'New' },
];

export const customers = [
  { name: 'Acme Digital', email: 'hello@acmedigital.co', source: 'Website', status: 'Active' },
  { name: 'Cedar & Co', email: 'team@cedarco.com', source: 'Referral', status: 'Onboarding' },
  { name: 'Harbor Labs', email: 'sales@harborlabs.io', source: 'Paid ads', status: 'Active' },
  { name: 'Northwind Commerce', email: 'support@northwind.com', source: 'Outbound', status: 'At risk' },
];

export const workflowNodes = [
  { id: 'trigger', type: 'Trigger', label: 'New Lead', x: 24, y: 120 },
  { id: 'ai', type: 'AI', label: 'Qualify Lead', x: 260, y: 120 },
  { id: 'condition', type: 'Logic', label: 'Score > 70', x: 500, y: 120 },
  { id: 'email', type: 'Action', label: 'Send Email', x: 740, y: 70 },
  { id: 'task', type: 'Action', label: 'Create Task', x: 740, y: 200 },
];

export const plans = [
  { name: 'Free', price: '$0', description: 'For early-stage teams', cta: 'Get started' },
  { name: 'Pro', price: '$39', description: 'For growing businesses', cta: 'Upgrade', featured: true },
  { name: 'Business', price: '$99', description: 'For scaling operations', cta: 'Talk to sales' },
  { name: 'Enterprise', price: 'Custom', description: 'For advanced compliance', cta: 'Contact us' },
];

export const faqs = [
  { question: 'How quickly can we launch?', answer: 'Most teams launch in under a week with automation templates and guided onboarding.' },
  { question: 'Does FlowPilot support custom integrations?', answer: 'Yes. Use webhooks, REST APIs, and native connectors for Gmail, Slack, Stripe, and more.' },
  { question: 'What happens when an automation fails?', answer: 'Each run captures logs, step-level retries, and alerting so teams can resolve issues fast.' },
  { question: 'Can we use AI safely?', answer: 'Every AI step is tracked, scoped, and configurable with approval mechanisms for sending outbound content.' },
];

export const blogPosts = [
  { title: 'Why AI workflow orchestration matters for SMBs', category: 'Automation', readTime: '4 min read' },
  { title: 'Designing a support playbook that scales', category: 'Customer Success', readTime: '6 min read' },
  { title: 'The modern operations stack for agencies', category: 'Operations', readTime: '5 min read' },
];
