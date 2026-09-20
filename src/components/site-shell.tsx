import Link from 'next/link';
import { ArrowRight, Menu, ShieldCheck, Sparkles } from 'lucide-react';
import { marketingNav } from '@/lib/data';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef3ff_100%)] text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-slate-500">FlowPilot</div>
              <div className="text-lg font-semibold tracking-tight">AI</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {marketingNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300">
              Log in
            </Link>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">
              Start for free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden" aria-label="Open menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {children}

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr] lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">FlowPilot</div>
                <div className="text-xl font-semibold tracking-tight">AI</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Automate the busywork. Turn fragmented operations into a streamlined AI-powered growth engine.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/automation">Workflow builder</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Secure by default</h4>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              SOC 2 ready infrastructure
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
