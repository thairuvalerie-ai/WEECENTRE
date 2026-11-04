import { cookies } from 'next/headers';

const CSRF_SECRET = process.env.CSRF_SECRET || 'default-csrf-secret-change-in-production';

// Generate a simple CSRF token
export function generateCSRFToken(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2);
  const token = Buffer.from(`${timestamp}-${random}-${CSRF_SECRET}`).toString('base64');
  return token;
}

// Validate CSRF token
export function validateCSRFToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split('-');
    
    if (parts.length < 3) {
      return false;
    }

    const timestamp = parseInt(parts[0], 10);
    const secret = parts[parts.length - 1];

    // Check if secret matches
    if (secret !== CSRF_SECRET) {
      return false;
    }

    // Check if token is not too old (1 hour)
    const oneHour = 60 * 60 * 1000;
    if (Date.now() - timestamp > oneHour) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

// Set CSRF token in cookie
export async function setCSRFCookie(): Promise<string> {
  const token = generateCSRFToken();
  const cookieStore = await cookies();
  
  cookieStore.set('csrf_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  });

  return token;
}

// Get CSRF token from cookie
export async function getCSRFCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get('csrf_token')?.value;
}

// Validate CSRF token from request
export async function validateCSRFRequest(token: string): Promise<boolean> {
  const cookieToken = await getCSRFCookie();
  
  if (!cookieToken) {
    return false;
  }

  // Both tokens should match
  return token === cookieToken && validateCSRFToken(token);
}
