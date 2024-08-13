const API_ULR = 'http://localhost/3001'

const initPostOptions = (body: Record<string, unknown> | string): RequestInit => {
  return ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const isUser = async (email: string) => {
  const request = await fetch(`${API_ULR}/user/is`, initPostOptions({ email }))
  return await request.json()
}