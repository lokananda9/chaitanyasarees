import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_SECRET_TOKEN = process.env.ADMIN_SECRET_TOKEN || "super_secret_development_token";

export function middleware(request: NextRequest) {
  // Only protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Allow access to the login page itself
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    const session = request.cookies.get(SESSION_COOKIE_NAME);

    // If no valid session, redirect to login
    if (!session || session.value !== SESSION_SECRET_TOKEN) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure the middleware to only run on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
