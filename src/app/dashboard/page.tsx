import { ArrowUpRight, Bot, BriefcaseBusiness, CircleDollarSign, TrendingUp } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { dashboardStats, revenueSeries, workflowStates } from '@/lib/data';

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Overview</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Business dashboard</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
            <TrendingUp className="h-4 w-4" />
            Monthly performance
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-3 flex items-end justify-between gap-2">
                <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{stat.delta}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Revenue</div>
                <div className="mt-2 text-2xl font-semibold">$142.8K</div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                <ArrowUpRight className="h-4 w-4" />
                +9.4%
              </div>
            </div>
            <div className="flex h-48 items-end gap-2">
              {revenueSeries.map((value, idx) => (
                <div key={idx} className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-600 to-indigo-300" style={{ height: `${value}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-6 text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Workflow health</div>
            <div className="space-y-4">
              {workflowStates.map(({ name, percent, tone }) => (
                <div key={name}>
                  <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                    <span>{name}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100">
                    <div className={`h-2.5 rounded-full ${tone === 'emerald' ? 'bg-emerald-500' : tone === 'blue' ? 'bg-blue-500' : tone === 'violet' ? 'bg-violet-500' : 'bg-amber-500'}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700"><Bot className="h-5 w-5" /></div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">AI usage</div>
            <div className="mt-3 text-3xl font-semibold">38.5K</div>
            <div className="mt-2 text-sm text-emerald-600">+16.7% from last month</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700"><BriefcaseBusiness className="h-5 w-5" /></div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Qualified leads</div>
            <div className="mt-3 text-3xl font-semibold">1,312</div>
            <div className="mt-2 text-sm text-slate-500">84 calls scheduled this week</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><CircleDollarSign className="h-5 w-5" /></div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Customer value</div>
            <div className="mt-3 text-3xl font-semibold">$96.4K</div>
            <div className="mt-2 text-sm text-slate-500">New recurring revenue</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
