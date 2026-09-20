import { SiteShell } from '@/components/site-shell';

const entries = [
  { version: 'v1.3', date: 'May 2026', text: 'Workflow AI scoring and document extraction improvements.' },
  { version: 'v1.2', date: 'Apr 2026', text: 'New integrations for Google Sheets and Slack.' },
  { version: 'v1.1', date: 'Mar 2026', text: 'Dashboard enhancements and performance upgrades.' },
];

export default function ChangelogPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="pill mb-4">Changelog</div>
        <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Product updates</h1>
        <div className="mt-10 space-y-6">
          {entries.map(({ version, date, text }) => (
            <div key={version} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">{version}</div>
                <div className="text-sm text-slate-500">{date}</div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
