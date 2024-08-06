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