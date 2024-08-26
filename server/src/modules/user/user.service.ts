import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {IUser} from "../../types/types";
import {User} from "../../../prisma/src/prisma-client";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: IUser): Promise<User>{
    const { email, password } = data

    if(await this.isUserExists(email)){
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST)
    }

    return this.prisma.user.create({
      data: { email, password }
    })
  }

  async findOneByEmail(email: string): Promise<User>{
    return this.prisma.user.findFirst({ where: { email } })
  }

  async isUserExists(email: string): Promise<Boolean> {
    return !!await this.findOneByEmail(email)
  }

  async findOneById(id: number): Promise<User>{
    return this.prisma.user.findFirst({ where: { id } })
  }
}