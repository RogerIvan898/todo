class Api {
  readonly API_ULR = 'http://localhost:3001/api'

  private initPostOptions(body: Record<string, unknown> | string): RequestInit {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }

  public async isUserExists(email: string) {
    const response = await fetch(`${this.API_ULR}/user/isExists`, this.initPostOptions({email}))
    return response.json()
  }

  public async registerUser(email: string, password: string) {
    const response = await fetch(`${this.API_ULR}/auth/register`, this.initPostOptions({email, password}))
    return response.json()
  }
}

export const api = new Api()