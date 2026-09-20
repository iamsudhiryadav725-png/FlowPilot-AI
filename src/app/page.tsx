import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, CheckCircle2, CircleDashed, Database, Mail, MessageSquareText, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { faqs, plans } from '@/lib/data';

const logos = ['Notion', 'Linear', 'Stripe', 'HubSpot', 'Slack', 'Vercel'];

const workflowSteps = [
  'Capture lead from web form',
  'Analyze with AI',
  'Score and route to sales',
  'Send follow-up email',
  'Create task and reminder',
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="pill mb-6">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                AI business automation platform
              </div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl">
                Automate the busywork.
                <span className="block text-slate-500">Grow your business.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                FlowPilot AI connects your tools, understands your business data, and automates repetitive workflows so your team can focus on meaningful work.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/automation" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                  Explore automations
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {["A", "M", "J"].map((initial, idx) => (
                    <div key={initial} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold ${idx === 0 ? 'bg-slate-900 text-white' : idx === 1 ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'}`}>
                      {initial}
                    </div>
                  ))}
                </div>
                <span>Trusted by operators from 600+ businesses</span>
              </div>
            </div>

            <div className="relative">
              <div className="grid-pattern absolute inset-0 -z-10 rounded-[2rem] border border-slate-200 bg-white/60" />
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Live pipeline</div>
                    <div className="mt-2 text-xl font-semibold">New Lead Follow-up</div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">Active</div>
                </div>

                <div className="mt-5 space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1 text-sm font-medium text-slate-700">{step}</div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-slate-950 p-4 text-white">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Leads</div>
                    <div className="mt-2 text-2xl font-semibold">1.2k</div>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4 text-sky-800">
                    <div className="text-xs uppercase tracking-[0.18em] text-sky-700">AI</div>
                    <div className="mt-2 text-2xl font-semibold">97%</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <div className="text-xs uppercase tracking-[0.18em] text-emerald-700">Saved</div>
                    <div className="mt-2 text-2xl font-semibold">18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/70 py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Trusted by modern teams</div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center text-lg font-semibold text-slate-400 md:grid-cols-6">
              {logos.map((logo) => (
                <div key={logo} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">{logo}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="pill mb-4">Why teams switch</div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">The operating system for modern business workflows</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Workflow, title: 'Visual automation builder', description: 'Design workflows without code and route work automatically across your business systems.' },
              { icon: Bot, title: 'AI decisions in context', description: 'Use AI to summarize, classify, score, and draft outreach based on real customer signals.' },
              { icon: Database, title: 'One source of truth', description: 'Keep customers, leads, documents, and execution logs connected in a single workspace.' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <div className="pill mb-4 border-slate-700 bg-slate-900 text-slate-200">How it works</div>
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">From scattered work to automated execution</h2>
              </div>
              <Link href="/automations/new" className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                Build a workflow <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {['Connect your tools', 'Trigger the workflow', 'Let AI reason', 'Track every result'].map((step, idx) => (
                <div key={step} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-sky-300">0{idx + 1}</div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">The platform orchestrates actions, approvals, AI analysis, and follow-ups in one reliable engine.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.04)]">
            <div className="mb-10 max-w-2xl">
              <div className="pill mb-4">AI automation demo</div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">AI with business context, not just prompts</h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl bg-slate-50 p-5">
                <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
                  <MessageSquareText className="h-4 w-4" />
                  Customer inquiry
                </div>
                <p className="rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700">
                  “Hi, we’re looking for a website refresh and want to know what your process looks like and how much it costs.”
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'AI classification', value: 'Qualified inbound lead' },
                  { label: 'Lead score', value: '92 / 100' },
                  { label: 'Suggested response', value: 'Friendly, consultative, pricing-ready' },
                  { label: 'Next actions', value: 'Schedule call, send proposal template, tag sales queue' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="font-medium text-slate-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <div className="pill mb-4">Security-first</div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Built for the safeguards modern businesses need</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: 'Protected by default', text: 'Secure cookies, verified webhooks, audit logs, and role-based access control.' }, { icon: Mail, title: 'Deliverability controls', text: 'Opt-out compliance, sending caps, suppression lists, and bounce tracking.' }, { icon: CircleDashed, title: 'Operational visibility', text: 'Track every run, log every step, and surface issues before they impact customers.' }].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 text-center">
            <div className="pill mb-4">Pricing</div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Simple plans, no surprises</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl border p-6 ${plan.featured ? 'border-slate-900 bg-slate-950 text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)]' : 'border-slate-200 bg-white text-slate-900'}`}>
                <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] opacity-70">{plan.name}</div>
                <div className="mb-3 text-4xl font-semibold tracking-[-0.05em]">{plan.price}</div>
                <p className={`${plan.featured ? 'text-slate-300' : 'text-slate-600'} mb-6 text-sm`}>{plan.description}</p>
                <Link href="/dashboard" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${plan.featured ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="pill mb-4">Customer stories</div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Teams use FlowPilot to run smarter, not harder</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              '“We cut our lead response time from 3 hours to 12 minutes.”',
              '“Our workflow engine handles follow-ups and routing without adding headcount.”',
              '“The AI assistant acts like a trained operator for our support queue.”',
            ].map((quote, idx) => (
              <div key={quote} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="mb-5 h-10 w-10 rounded-full bg-slate-100 text-sm font-semibold text-slate-900 flex items-center justify-center">{['A', 'M', 'R'][idx]}</div>
                <p className="text-base leading-8 text-slate-700">{quote}</p>
                <div className="mt-6 text-sm font-medium text-slate-500">Sample customer story</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="pill mb-4">FAQ</div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Questions teams usually ask</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <div className="pill mb-4 border-slate-700 bg-slate-900 text-slate-200">Ready to automate?</div>
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">Build a faster, smarter business.</h2>
              </div>
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
