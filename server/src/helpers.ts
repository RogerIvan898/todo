import {pbkdf2Sync, randomBytes} from "crypto";
import {IApiRequest} from "./types/types";

export const formatResponse = <T>(data: T, message: string = 'Request is successful'): IApiRequest<T> => {
  return {
    success: true,
    message,
    data
  }
}

export const hashPassword = (password: string) => {
  const salt = randomBytes(16).toString('hex')
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

  return { salt, hash }
}

export const validatePassword = (password: string, hashedPassword: string) => {
  const { hash } = hashPassword(password)
  return hash === hashedPassword
}