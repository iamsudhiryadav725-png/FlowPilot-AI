import { AppShell } from '@/components/app-shell';

export default function DeveloperPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Developer</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">API and webhooks</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">API key</div>
            <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-white">fp_live_3f8a9c4d1e2b</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Documentation</div>
            <div className="space-y-2 text-sm text-slate-700">
              <div>POST /api/v1/leads</div>
              <div>GET /api/v1/leads</div>
              <div>{'POST /api/v1/workflows/{id}/run'}</div>
              <div>POST /api/v1/ai/generate</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
