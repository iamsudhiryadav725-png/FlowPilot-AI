import { AppShell } from '@/components/app-shell';

const tickets = [
  { subject: 'Workflow failed after webhook retry', status: 'Open', priority: 'High' },
  { subject: 'Need help setting up approval flow', status: 'In progress', priority: 'Medium' },
  { subject: 'Billing question', status: 'Resolved', priority: 'Low' },
];

export default function SupportPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Support</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Tickets</h1>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">New ticket</button>
        </div>

        <div className="space-y-3">
          {tickets.map(({ subject, status, priority }) => (
            <div key={subject} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-5">
              <div>
                <div className="font-medium text-slate-900">{subject}</div>
                <div className="mt-1 text-sm text-slate-500">Priority: {priority}</div>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
