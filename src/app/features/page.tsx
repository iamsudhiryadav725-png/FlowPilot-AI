import { Bot, Database, ShieldCheck, Workflow } from 'lucide-react';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const features = [
  { icon: Workflow, title: 'Visual workflow builder', text: 'Create trigger-to-action automations with a drag-and-drop editor.' },
  { icon: Bot, title: 'AI decisioning', text: 'Classify, summarize, score, and draft responses with built-in AI actions.' },
  { icon: Database, title: 'Unified customer data', text: 'Use a shared CRM and document layer across sales, support, and operations.' },
  { icon: ShieldCheck, title: 'Security and guardrails', text: 'Protect every critical operation with authentication, authorization, and audit logging.' },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">Features</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Everything your operation needs to scale</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{title}</h2>
              <p className="text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white">
          <h3 className="text-3xl font-semibold tracking-[-0.05em]">Launch faster with templates and guided onboarding.</h3>
          <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">Start free</Link>
        </div>
      </main>
    </SiteShell>
  );
}
