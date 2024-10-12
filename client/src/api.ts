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

  public registerUser = async (email: string, password: string)=>  {
    const response = await fetch(`${this.API_ULR}/auth/register`, this.initPostOptions({ email, password }))
    return response.json()
  }

  public loginUser = async (email: string, password: string) => {
    const response = await fetch(
      `${this.API_ULR}/auth/login`,
      this.initPostOptions({ email, password }, true)
    )

    if(!response.ok){
      throw new Error('Login failed')
    }

    const data = await response.json()

    return data
  }
}

export const api = new Api()
