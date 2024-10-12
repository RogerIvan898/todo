class Api {
  readonly API_ULR = 'http://localhost:3001/api'

  private initPostOptions(body: Record<string, unknown>, cookie = false): RequestInit {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: cookie ? 'include' : 'omit'
    }
  }

  private async fetchJson(url: string, options: RequestInit){
    const response = await fetch(url, options)

    if(!response.ok){
      const errorData = await response.json()
      throw new Error(errorData.message || 'Ann error occurred')
    }

    return response.json()
  }

  public async isUserExists(email: string): Promise<Boolean> {
    return this.fetchJson(`${this.API_ULR}/user/isExists`, this.initPostOptions({ email }))
  }

  public registerUser = async (email: string, password: string)=>  {
    return this.fetchJson(`${this.API_ULR}/auth/register`, this.initPostOptions({ email, password }))
  }

  public loginUser = async (email: string, password: string) => {
    return this.fetchJson(
      `${this.API_ULR}/auth/login`,
      this.initPostOptions({ email, password }, true)
    )
  }
}

export const api = new Api()
