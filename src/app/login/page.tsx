import Link from 'next/link';
import { login } from '@/app/actions/auth';
import { SiteShell } from '@/components/site-shell';

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const errorMessage = error === 'invalid'
    ? 'Those credentials are not recognized.'
    : error === 'missing'
      ? 'Enter both your email and password.'
      : null;

  return (
    <SiteShell>
      <main className="mx-auto max-w-md px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.04)]">
          <div className="pill mb-5">Welcome back</div>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Sign in</h1>
          {errorMessage && <div role="alert" className="mt-6 rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{errorMessage}</div>}
          <form action={login} className="mt-8 space-y-4">
            <input name="email" type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Email" autoComplete="email" />
            <input name="password" type="password" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Password" autoComplete="current-password" />
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Log in</button>
          </form>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">
            <div><span className="font-semibold text-slate-700">User demo:</span> demo@flowpilot.ai / user123</div>
            <div><span className="font-semibold text-slate-700">Admin demo:</span> admin@flowpilot.ai / admin123</div>
          </div>
          <div className="mt-6 text-center text-sm text-slate-500">
            Need an account? <Link href="/contact" className="font-medium text-slate-900">Contact us</Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
