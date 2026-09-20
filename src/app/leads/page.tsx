import { AppShell } from '@/components/app-shell';
import { leads } from '@/lib/data';

export default function LeadsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Pipeline</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Leads</h1>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">New lead</button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3">Lead</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(({ name, company, score, status }) => (
                <tr key={name} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="px-4 py-3 font-medium text-slate-900">{name}</td>
                  <td className="px-4 py-3">{company}</td>
                  <td className="px-4 py-3">{score}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700">{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
