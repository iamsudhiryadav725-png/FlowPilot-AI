import Link from 'next/link';
import { CalendarDays, Mail, MessageSquareText, Table2, Webhook, Zap } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

const integrations = [
  { icon: Mail, title: 'Gmail', text: 'Track inbound messages and automate follow-ups.' },
  { icon: MessageSquareText, title: 'Slack', text: 'Notify teams in channel-based workflows.' },
  { icon: CalendarDays, title: 'Google Calendar', text: 'Create scheduled appointments and reminders.' },
  { icon: Table2, title: 'Google Sheets', text: 'Sync records and reporting exports.' },
  { icon: Webhook, title: 'Webhooks', text: 'Connect with custom APIs and third-party systems.' },
  { icon: Zap, title: 'Stripe', text: 'Connect billing events and customer lifecycle triggers.' },
];

export default function IntegrationsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">Integrations</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Connect the tools you already rely on</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {integrations.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{title}</h2>
              <p className="text-sm leading-7 text-slate-600">{text}</p>
              <Link href="/dashboard" className="mt-5 inline-flex text-sm font-medium text-slate-700">Connect →</Link>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
