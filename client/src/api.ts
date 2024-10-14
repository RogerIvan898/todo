class Api {
  readonly API_URL = 'http://localhost:3001/api'

  private initPostOptions(body: Record<string, unknown>, cookie = false): RequestInit {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: cookie ? 'include' : 'omit'
    }
  }

  private async fetchJson<T>(url: string, options: RequestInit): Promise<T>{
    const response = await fetch(url, options)

    if(response.status === 401){
      await this.refreshToken()
      return this.fetchJson<T>(url, options)
    }

    if(!response.ok){
      const errorData = await response.json()
      throw new Error(errorData.message || 'Ann error occurred')
    }

    return response.json()
  }

  public async isUserExists(email: string): Promise<Boolean> {
    return this.fetchJson(`${this.API_URL}/user/isExists`, this.initPostOptions({ email }))
  }

  public registerUser = async (email: string, password: string)=>  {
    return this.fetchJson(`${this.API_URL}/auth/register`, this.initPostOptions({ email, password }))
  }

  public loginUser = async (email: string, password: string) => {
    return this.fetchJson(
      `${this.API_URL}/auth/login`,
      this.initPostOptions({ email, password }, true)
    )
  }

  public async refreshToken() {
    const response = await fetch(`${this.API_URL}/jwt-token/refresh`, {
      method: 'POST',
      credentials: 'include'
    })
    return response.json()
  }
}

export const api = new Api()
