import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_COOKIE = 'flowpilot_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const DEVELOPMENT_SECRET = 'flowpilot-development-secret-change-me';

export type UserRole = 'user' | 'admin';

export type Session = {
  email: string;
  name: string;
  role: UserRole;
};

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === 'production') {
    throw new Error('AUTH_SECRET must be configured in production.');
  }
  return DEVELOPMENT_SECRET;
}

function encode(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url');
}

function decode(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function sign(value: string) {
  return createHmac('sha256', getAuthSecret()).update(value).digest('base64url');
}

function serializeSession(session: Session) {
  const payload = encode(JSON.stringify(session));
  return `${payload}.${sign(payload)}`;
}

function parseSession(value?: string): Session | null {
  if (!value) return null;

  const [payload, signature] = value.split('.');
  if (!payload || !signature) return null;

  const expectedSignature = sign(payload);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) return null;

  try {
    const session = JSON.parse(decode(payload)) as Partial<Session>;
    if (
      typeof session.email !== 'string' ||
      typeof session.name !== 'string' ||
      (session.role !== 'user' && session.role !== 'admin')
    ) {
      return null;
    }
    return session as Session;
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  return parseSession(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function createSession(session: Session) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, serializeSession(session), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_TTL_SECONDS,
    path: '/',
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function requireUser() {
  const session = await getSession();
  if (!session) redirect('/login');
  if (session.role !== 'user') redirect('/admin');
  return session;
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session) redirect('/login');
  if (session.role !== 'admin') redirect('/dashboard');
  return session;
}
