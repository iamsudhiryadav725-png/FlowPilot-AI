import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const sections = [
  'Getting started',
  'Authentication',
  'API',
  'Webhooks',
  'Workflows',
  'AI',
  'Integrations',
  'Billing',
  'Security',
  'Troubleshooting',
];

export default function DocsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">Docs</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Developer and product documentation</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <div key={section} className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-800">
              <div className="flex items-center justify-between">
                <span className="font-medium">{section}</span>
                <Link href="/developer" className="text-sm text-slate-500">Open →</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
