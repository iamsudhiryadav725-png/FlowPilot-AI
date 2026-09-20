import { AppShell } from '@/components/app-shell';

const metrics = [
  { label: 'Total users', value: '4,820' },
  { label: 'Active orgs', value: '312' },
  { label: 'MRR', value: '$84.2K' },
  { label: 'Workflow runs', value: '126K' },
];

export default function AdminPage() {
  return (
    <AppShell access="admin">
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Admin</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Control center</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map(({ label, value }) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="mt-3 text-3xl font-semibold text-slate-900">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
