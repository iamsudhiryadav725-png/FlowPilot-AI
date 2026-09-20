import { AppShell } from '@/components/app-shell';

export default function AiAssistantPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">AI</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">AI assistant</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <textarea className="h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700" defaultValue="Customer is asking for pricing of our web development service." />
            <div className="mt-4 flex flex-wrap gap-3">
              {['Friendly', 'Professional', 'Persuasive', 'Short response'].map((tone) => (
                <button key={tone} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">{tone}</button>
              ))}
            </div>
            <button className="mt-5 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Generate response</button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Suggested response</div>
            <p className="mt-4 text-sm leading-7 text-slate-700">Thanks for reaching out. We’d be happy to share a tailored proposal for your project based on scope, timeline, and business goals. Let’s schedule a short call to align on the best fit.</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
