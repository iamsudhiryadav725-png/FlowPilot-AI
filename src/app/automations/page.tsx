import Link from 'next/link';
import { AppShell } from '@/components/app-shell';

const workflows = [
  { name: 'New Lead Follow-up', status: 'Active', runs: '1,212', lastRun: '12 min ago' },
  { name: 'Customer Welcome', status: 'Draft', runs: '422', lastRun: '2 hours ago' },
  { name: 'Invoice Processing', status: 'Paused', runs: '784', lastRun: '1 day ago' },
];

export default function AutomationsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Workflow studio</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Automations</h1>
          </div>
          <Link href="/automations/new" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Create workflow</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {workflows.map(({ name, status, runs, lastRun }) => (
            <div key={name} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-lg font-semibold text-slate-900">{name}</div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">{status}</span>
              </div>
              <div className="text-sm text-slate-500">{runs} runs</div>
              <div className="mt-4 text-sm text-slate-600">Last run: {lastRun}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
