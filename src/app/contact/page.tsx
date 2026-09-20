import { SiteShell } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="pill mb-4">Contact</div>
        <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Talk with the FlowPilot team</h1>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Name" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Email" />
          </div>
          <textarea className="mt-4 h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="How can we help?" />
          <button className="mt-4 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Send message</button>
        </div>
      </main>
    </SiteShell>
  );
}
