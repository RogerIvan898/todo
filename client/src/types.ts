export interface Folder{
  id?: string
  title: string
  notes: INote[]
}

export interface INote{
  id?: string
  title: string
  description?: string
  folder: string
  created: string
  type: string
  bookmark: boolean
}

export interface IUser{
  id: string
  email: string
  password: string
}

export interface IAuthData{
  email: string
  password: string
  confirmPassword?: string
}

export interface INoteTag{
  id: string
  content: string
  color: string
}