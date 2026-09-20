import { AppShell } from '@/components/app-shell';

const notifications = [
  { title: 'Workflow completed', detail: 'New Lead Follow-up finished successfully', time: '3 min ago' },
  { title: 'Team invitation', detail: 'Ariana joined the marketing workspace', time: '1 hour ago' },
  { title: 'Usage warning', detail: 'AI usage is at 82% of your monthly limit', time: 'Today' },
];

export default function NotificationsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Notifications</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Alerts and updates</h1>
        </div>

        <div className="space-y-3">
          {notifications.map(({ title, detail, time }) => (
            <div key={title} className="flex items-start justify-between rounded-3xl border border-slate-200 bg-white p-5">
              <div>
                <div className="font-medium text-slate-900">{title}</div>
                <div className="mt-1 text-sm text-slate-600">{detail}</div>
              </div>
              <div className="text-sm text-slate-500">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
