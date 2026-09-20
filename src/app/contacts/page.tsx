import { AppShell } from '@/components/app-shell';

const contacts = [
  { name: 'Maya Patel', role: 'Marketing lead', email: 'maya@northstar.studio' },
  { name: 'Ethan Ross', role: 'Operations director', email: 'ethan@blueharbor.io' },
  { name: 'Olivia Chen', role: 'Account manager', email: 'olivia@asterlabs.com' },
];

export default function ContactsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">CRM</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Contacts</h1>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Add contact</button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contacts.map(({ name, role, email }) => (
            <div key={name} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900">{name.split(' ').map((part) => part[0]).join('')}</div>
              <div className="text-xl font-semibold text-slate-900">{name}</div>
              <div className="mt-1 text-sm text-slate-500">{role}</div>
              <div className="mt-4 text-sm text-slate-600">{email}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
