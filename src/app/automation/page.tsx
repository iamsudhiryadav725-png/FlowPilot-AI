import Link from 'next/link';
import { ArrowRight, Plus, Route, Zap } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

export default function AutomationPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="pill mb-4">Automation</div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Design workflows that run your business</h1>
          </div>
          <Link href="/automations/new" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            New workflow <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Zap, title: 'Trigger any event', text: 'Run actions when a lead arrives, a customer updates, a form closes, or a schedule hits.' },
            { icon: Route, title: 'Easy branching', text: 'Use conditions, filters, and AI scoring to route work automatically.' },
            { icon: Plus, title: 'Reusable templates', text: 'Install sales, support, and operations templates with a single click.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{title}</h2>
              <p className="text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
