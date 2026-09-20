# FlowPilot AI

FlowPilot AI is a modern SaaS foundation for AI-powered business automation. The platform is designed for small businesses, agencies, and service teams that need to automate lead routing, customer communication, operational tasks, AI classification, and reporting.

## Product overview

- Visual workflow builder for no-code automation
- AI-assisted lead qualification and customer response drafting
- CRM, lead management, customer support flows, and document AI
- Multi-tenant organization model with permissions and role access
- Billing, usage tracking, subscriptions, and API integrations
- Admin dashboards, notifications, and audit trails

## Tech stack

- Next.js 16 + React 19 + TypeScript + Tailwind CSS
- shadcn-inspired UI patterns and premium SaaS UI styling
- Lucide icons and subtle motion for polished interactions
- Architecture designed around modular services, multi-tenancy, and future Laravel backend integration

## Architecture

```mermaid
flowchart LR
  User[Users & Teams] --> App[Next.js Frontend]
  App --> CRM[CRM / Leads / Customers]
  App --> Workflow[Automation Engine]
  App --> AI[AI Service Layer]
  Workflow --> Queue[Redis Queue]
  AI --> Providers[AI Providers]
  App --> API[REST API Layer]
  API --> DB[(PostgreSQL)]
  API --> Redis[(Redis)]
  API --> Storage[(S3-compatible storage)]
  App --> Billing[Stripe + Billing]
```

## Features

- Marketing website and product shell
- Dashboard with KPIs and charts
- Automation builder UI with trigger/AI/logic/action nodes
- CRM sections for customers, leads, and contacts
- AI assistant and document AI mock experience
- Integrations and developer API screens
- Billing and admin pages
- Notification center and support tickets

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Use a `.env.local` file with the following placeholders:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=FlowPilot AI

# Database / Redis / Storage
DATABASE_URL=postgresql://user:password@localhost:5432/flowpilot
REDIS_URL=redis://localhost:6379
S3_ENDPOINT=https://your-s3-endpoint
S3_BUCKET=flowpilot-storage
S3_KEY=your-key
S3_SECRET=your-secret

# AI providers
OPENAI_API_KEY=your-key
ANTHROPIC_API_KEY=your-key

# OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Stripe
STRIPE_SECRET_KEY=your-stripe-secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-key

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASSWORD=your-password
```

## API documentation and roadmap

The frontend includes a product and developer API surface aligned to SaaS platform requirements. The next production step is to pair this UI foundation with Laravel API endpoints, PostgreSQL schema, and Stripe billing integrations.

## Security and product guidance

- Treat auth, permissions, and billing actions as server-side responsibilities
- Validate every mutation and authorization check on the backend
- Use signed webhooks and hashed secrets in production
- Keep AI usage and billing metadata tied to organizations and users

## Contribution

1. Create a branch for your feature
2. Implement the change and validate with lint/build
3. Open a pull request with a concise summary and screenshots if relevant

## Roadmap

- Laravel backend and PostgreSQL schema
- Auth and organization multi-tenancy
- Workflow engine with queue execution
- AI abstraction provider layer
- Stripe subscriptions and usage metering
- Admin analytics and support functionality
