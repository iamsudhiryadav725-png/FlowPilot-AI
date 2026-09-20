import { AppShell } from '@/components/app-shell';
import { customers } from '@/lib/data';

export default function CustomersPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">CRM</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Customers</h1>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Add customer</button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(({ name, email, source, status }) => (
                <tr key={name} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="px-4 py-3 font-medium text-slate-900">{name}</td>
                  <td className="px-4 py-3">{email}</td>
                  <td className="px-4 py-3">{source}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
