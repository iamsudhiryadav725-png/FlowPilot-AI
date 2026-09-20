import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';
import { plans } from '@/lib/data';

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <div className="pill mb-4">Pricing</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Choose the plan that matches your growth</h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-6 ${plan.featured ? 'border-slate-900 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] opacity-70">{plan.name}</div>
              <div className="mb-3 text-4xl font-semibold tracking-[-0.05em]">{plan.price}</div>
              <p className={`${plan.featured ? 'text-slate-300' : 'text-slate-600'} mb-6 text-sm`}>{plan.description}</p>
              <Link href="/dashboard" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${plan.featured ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
