import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {IUser} from "../../types/types";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: IUser){
    const { email, password } = data

    return await this.prisma.user.create({ data: { email, password } })
  }

  async findOneByEmail(email: string){
    return await this.prisma.user.findFirst({ where: { email: email } })
  }

  async isUser(email: string): Promise<Boolean> {
    console.log(email)
    console.log(await this.findOneByEmail(email))
    return !!await this.findOneByEmail(email)
  }
}
