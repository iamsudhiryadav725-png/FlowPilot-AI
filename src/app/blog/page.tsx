import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="pill mb-4">Blog</div>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">Insights for modern operators</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map(({ title, category, readTime }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{category}</div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">{title}</h2>
              <div className="mt-4 text-sm text-slate-500">{readTime}</div>
              <Link href="/blog" className="mt-6 inline-flex text-sm font-medium text-slate-700">Read article →</Link>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
