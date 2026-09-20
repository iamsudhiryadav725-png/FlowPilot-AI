import { AppShell } from '@/components/app-shell';

export default function DocumentsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Document AI</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Documents</h1>
        </div>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <div className="text-lg font-semibold text-slate-900">Upload a PDF, DOCX, or image</div>
          <div className="mt-2 text-sm text-slate-500">FlowPilot extracts customer and invoice data automatically.</div>
          <button className="mt-6 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Select file</button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Extracted fields</div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ['Customer', 'Acme Digital'],
              ['Invoice number', 'INV-2048'],
              ['Date', '2026-09-19'],
              ['Items', 'Brand kit + website revisions'],
              ['Tax', '$188.00'],
              ['Total', '$2,118.00'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <span className="text-slate-500">{label}</span>
                <span className="font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
