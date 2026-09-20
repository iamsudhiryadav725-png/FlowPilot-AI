import Link from 'next/link';
import { Bell, BriefcaseBusiness, Building2, CheckCircle2, LayoutGrid, MessageSquareText, Rocket, Search, Settings, Sparkles, Users } from 'lucide-react';
import { logout } from '@/app/actions/auth';
import { requireAdmin, requireUser, type UserRole } from '@/lib/auth';

const userNavItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutGrid },
  { href: '/customers', label: 'Customers', icon: Users },
  { href: '/leads', label: 'Leads', icon: BriefcaseBusiness },
  { href: '/automations', label: 'Automations', icon: Rocket },
  { href: '/ai-assistant', label: 'AI assistant', icon: MessageSquareText },
  { href: '/integrations', label: 'Integrations', icon: CheckCircle2 },
  { href: '/billing', label: 'Billing', icon: Building2 },
];

const adminNavItems = [{ href: '/admin', label: 'Control center', icon: Settings }];

export async function AppShell({ children, access = 'user' }: { children: React.ReactNode; access?: UserRole }) {
  const session = access === 'admin' ? await requireAdmin() : await requireUser();
  const navItems = access === 'admin' ? adminNavItems : userNavItems;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-5 lg:px-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] lg:block">
          <div className="mb-8 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[0.64rem] uppercase tracking-[0.24em] text-slate-500">FlowPilot</div>
              <div className="text-lg font-semibold tracking-tight">AI</div>
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-4 text-white">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Usage</div>
            <div className="text-2xl font-semibold">3,420</div>
            <div className="mt-2 text-sm text-slate-300">workflow runs used this month</div>
            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div className="h-2 w-[68%] rounded-full bg-emerald-400" />
            </div>
          </div>
        </aside>

        <div className="flex-1 rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
          <header className="flex items-center justify-between border-b border-slate-200 px-4 py-4 lg:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 lg:hidden">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Workspace</div>
                <div className="text-lg font-semibold">{access === 'admin' ? 'Platform administration' : 'Acme Digital'}</div>
              </div>
            </div>

            <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
              <Search className="h-4 w-4" />
              Search customers, workflows, docs
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-sm font-semibold text-white">AD</div>
                <div className="hidden text-left sm:block">
                  <div className="text-sm font-medium">{session.name}</div>
                  <div className="text-[0.7rem] text-slate-500">{access === 'admin' ? 'Administrator' : 'Workspace member'}</div>
                </div>
              </div>
              <form action={logout}>
                <button type="submit" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
                  Log out
                </button>
              </form>
            </div>
          </header>
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
