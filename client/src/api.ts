class Api {
  readonly API_ULR = 'http://localhost:3001/api'

  private initPostOptions(body: Record<string, unknown> | string, cookie = false): RequestInit {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
      credentials: cookie ? 'include' : 'omit'
    }
  }

  public async isUserExists(email: string): Promise<Boolean> {
    const response = await fetch(`${this.API_ULR}/user/isExists`, this.initPostOptions({ email }))
    return response.json()
  }

  public async registerUser(email: string, password: string) {
    const response = await fetch(`${this.API_ULR}/auth/register`, this.initPostOptions({ email, password }))
    return response.json()
  }

  public async loginUser(email: string, password: string){
    const response = await fetch(
      `${this.API_ULR}/auth/login`,
      this.initPostOptions({ email, password })
    )
    const data = await response.json()

    const { token } = data

    if(token){
      document.cookie = `jwt=${token}; max-age=${3600}; path=/`
      sessionStorage.setItem('token', token)
    }
    console.log(document.cookie)

    return data
  }
}

export const api = new Api()