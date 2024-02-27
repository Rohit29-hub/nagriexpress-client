import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const cookieStore = cookies();
    const sesssion = cookieStore.get('session')?.value;
    if(!sesssion){
        return NextResponse.redirect('http://localhost:3000/account/login');
    }
    
    return NextResponse.next();
}
 
export const config = {
  matcher: '/profile/:path*',
}