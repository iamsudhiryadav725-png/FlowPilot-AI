import Link from 'next/link';
import { Bot, BrainCircuit, FileText, Sparkles } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

const aiUseCases = [
  { icon: BrainCircuit, title: 'Lead scoring', text: 'Score incoming prospects based on fit, urgency, and business intent.' },
  { icon: FileText, title: 'Summaries and extraction', text: 'Transform documents and messages into structured data and context.' },
  { icon: Sparkles, title: 'Response drafting', text: 'Generate polished customer or team responses before review and send.' },
];

export default function AiPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">AI</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Actionable AI for the whole revenue engine</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {aiUseCases.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{title}</h2>
              <p className="text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-600"><Bot className="h-4 w-4" /> AI assistant</div>
          <p className="max-w-2xl text-xl leading-8 text-slate-700">“Customer is asking for pricing of our web development service.”</p>
          <Link href="/ai-assistant" className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Try the assistant</Link>
        </div>
      </main>
    </SiteShell>
  );
}
