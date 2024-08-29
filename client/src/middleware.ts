import {NextRequest, NextResponse} from "next/server";

export async function middleware(req: NextRequest){
  const token = req.cookies.get('jwt')

  if (!token) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url))
  }

  const response = await fetch('http://localhost:3001/api/jwt-token/is-valid', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(token)
  })

  if(await response.json()){
    return NextResponse.next()
  }

}

export const config = {
  matcher: '/todos'
}