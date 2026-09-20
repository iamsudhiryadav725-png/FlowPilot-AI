import { SiteShell } from '@/components/site-shell';

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="pill mb-4">About</div>
        <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">FlowPilot AI exists to remove repetitive work from growing businesses.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">We help teams connect their data, automate operational decisions, and scale service quality without adding unnecessary complexity.</p>
      </main>
    </SiteShell>
  );
}
