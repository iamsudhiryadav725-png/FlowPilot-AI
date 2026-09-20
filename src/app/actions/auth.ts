'use server';

import { redirect } from 'next/navigation';
import { clearSession, createSession } from '@/lib/auth';

const DEFAULT_ADMIN_EMAIL = 'admin@flowpilot.ai';
const DEFAULT_ADMIN_PASSWORD = 'admin123';
const DEFAULT_USER_EMAIL = 'demo@flowpilot.ai';
const DEFAULT_USER_PASSWORD = 'user123';

function getCredential(name: string, fallback: string) {
  return process.env[name] || fallback;
}

export async function login(formData: FormData) {
  const email = String(formData.get('email') || '').trim().toLowerCase();
  const password = String(formData.get('password') || '');

  if (!email || !password) redirect('/login?error=missing');

  const adminEmail = getCredential('ADMIN_EMAIL', DEFAULT_ADMIN_EMAIL).toLowerCase();
  const adminPassword = getCredential('ADMIN_PASSWORD', DEFAULT_ADMIN_PASSWORD);
  const userEmail = getCredential('DEMO_USER_EMAIL', DEFAULT_USER_EMAIL).toLowerCase();
  const userPassword = getCredential('DEMO_USER_PASSWORD', DEFAULT_USER_PASSWORD);

  if (email === adminEmail && password === adminPassword) {
    await createSession({ email: adminEmail, name: 'FlowPilot Admin', role: 'admin' });
    redirect('/admin');
  }

  if (email === userEmail && password === userPassword) {
    await createSession({ email: userEmail, name: 'Demo User', role: 'user' });
    redirect('/dashboard');
  }

  redirect('/login?error=invalid');
}

export async function logout() {
  await clearSession();
  redirect('/login');
}
