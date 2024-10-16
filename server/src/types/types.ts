export interface IUser{
  id?: string
  email: string
  password: string
}

export interface IApiRequest<T>{
  success: boolean
  message: string
  data?: T
  error?: string
}