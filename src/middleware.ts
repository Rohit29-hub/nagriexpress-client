import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from './actions/auth';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;
  const user = decrypt(session);

  if (!session) return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}account/login`);

  if(request.nextUrl.pathname.startsWith('/admin')){
    if(user.role == 'admin') NextResponse.next();
  }
  if(request.nextUrl.pathname.startsWith('/profile')){
    if(user.role == 'user' || user.role == 'admin') NextResponse.next();
  }
}

export const config = {
  matcher: ['/profile/:path*','/admin/:path*']
}