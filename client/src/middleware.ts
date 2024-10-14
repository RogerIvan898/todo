import {NextRequest, NextResponse} from "next/server";

const handleError = (req: NextRequest) => NextResponse.redirect(new URL('/auth/sign-in', req.url))

export async function middleware(req: NextRequest){
  try {
    const token = req.cookies.get('jwt')

    if(!token){
      return handleError(req)
    }

    const response = await fetch('http://localhost:3001/api/jwt-token/is-valid', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(token.value)
    })

    if (await response.json()) {
      return NextResponse.next()
    }
  } catch (e){
    console.log('Error validate token', e)
    return handleError(req)
  }
}

export const config = {
  matcher: '/todos'
}
