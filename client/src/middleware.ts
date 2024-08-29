import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest){
  const token = req.cookies.get('jwt')

  if (!token) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url))
  }


}

export const config = {
  matcher: '/todos'
}