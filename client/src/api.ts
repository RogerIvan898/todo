const API_ULR = 'http://localhost:3001/api'

const initPostOptions = (body: Record<string, unknown> | string): RequestInit => {
  return ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const isUserExists = async (email: string) => {
  const response = await fetch(`${API_ULR}/user/isExists`, initPostOptions({ email }))
  return response.json()
}

export const register = async (email: string, password: string) => {
  const response = await fetch(`${API_ULR}/auth/register`, initPostOptions({ email, password }))
  return response.json()
}