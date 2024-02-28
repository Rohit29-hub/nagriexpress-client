import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { useSession } from './actions/auth';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;
  // const data = useSession();
  // if (request.nextUrl.pathname.startsWith('/api/product/')) {
  //   if (!session) {
  //     return NextResponse.redirect(process.env.NEXT_PUBLIC_BASE_URL);
  //   }else{
  //     if(typeof data == 'object'){
  //       if (data.role == 'admin') {
  //         return NextResponse.next();
  //       } else {
  //         return NextResponse.json({
  //           message: 'Unauthorised access',
  //           status: 301
  //         })
  //       }
  //     }
  //   }
  // }

  if (!session) return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/account/login`);
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*','/api/admin/:path*']
}