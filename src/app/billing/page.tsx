import { AppShell } from '@/components/app-shell';
import { plans } from '@/lib/data';

export default function BillingPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Billing</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Subscription</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-5 ${plan.featured ? 'border-slate-900 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
              <div className="mb-2 text-sm font-medium uppercase tracking-[0.18em] opacity-70">{plan.name}</div>
              <div className="text-4xl font-semibold tracking-[-0.05em]">{plan.price}</div>
              <div className={`mt-3 text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
