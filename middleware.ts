import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from 'jose';


const PUBLIC_PATH = [ '/', '/login', '/sign-up']

export const config = {
  matcher: [
    // Only protect these pages
    '/users/:path*',
    '/post/:path*',
    
  ],
};

export async function middleware ( req: NextRequest){
    const { pathname } = req.nextUrl;
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    
    //Allow public paths
    if (PUBLIC_PATH.includes(pathname)) return NextResponse.next();
    
    const token = req.cookies.get('token')?.value;
    
    //Redirect to login if no token
    if(!token){
        return NextResponse.redirect(new URL('/login', req.url))
    }
    console.log('pathname', pathname)


    // Validate token
    try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

    // return NextResponse.redirect(new URL('/login', req.url))
 
