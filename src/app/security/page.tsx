import { ShieldCheck, LockKeyhole, ServerCog } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

const controls = [
  { icon: ShieldCheck, title: 'Identity and access', text: 'Role-based permissions, session management, and least-privilege access across teams.' },
  { icon: LockKeyhole, title: 'Protected secrets', text: 'Encrypted environment variables, hashed API keys, and strict webhook verification.' },
  { icon: ServerCog, title: 'Operational resilience', text: 'Audit logs, retries, rate limits, and error isolation protect production workloads.' },
];

export default function SecurityPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">Security</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Built with production-grade controls</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {controls.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
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
