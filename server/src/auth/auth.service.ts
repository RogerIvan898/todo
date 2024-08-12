import { Injectable } from '@nestjs/common';
import {pbkdf2Sync, randomBytes} from "crypto";
import {RegisterDto} from "./dto/register.dto";
import {PrismaService} from "../prisma/prisma.service";

function hashPassword(password: string){
  const salt = randomBytes(16).toString('hex')
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
  return { salt, hash }
}

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(registerDto: RegisterDto){
    const { email, password } = registerDto
    const { salt, hash } = hashPassword(password)

    const user = await this.prisma.user.create({
      data: {
        email,
        password: `${salt}:${hash}`
      }
    })

    return user
  }
}
