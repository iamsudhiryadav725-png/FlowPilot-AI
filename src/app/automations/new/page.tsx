import { AppShell } from '@/components/app-shell';
import { workflowNodes } from '@/lib/data';

export default function NewAutomationPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Workflow builder</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">New automation</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">Save draft</button>
            <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Publish</button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.18),transparent_20%)]" />
            {workflowNodes.map(({ id, type, label, x, y }) => (
              <div key={id} className="absolute" style={{ left: `${x}px`, top: `${y}px` }}>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">{type}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{label}</div>
                </div>
              </div>
            ))}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 500" preserveAspectRatio="none" aria-label="workflow connector lines">
              <path d="M 150 160 C 180 160, 210 160, 260 160 S 420 160, 500 160" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8 8" />
              <path d="M 600 160 C 650 160, 700 160, 740 120" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8 8" />
              <path d="M 600 160 C 650 160, 700 160, 740 200" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8 8" />
            </svg>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
