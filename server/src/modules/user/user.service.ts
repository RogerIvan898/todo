import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {IUser} from "../../types/types";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: IUser){
    const { email, password } = data

    if(await this.isUserExists(email)){
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST)
    }

    return this.prisma.user.create({
      data: { email, password }
    })
  }

  async findOneByEmail(email: string){
    return this.prisma.user.findFirst({ where: { email: email } })
  }

  async isUserExists(email: string): Promise<Boolean> {
    return !!await this.findOneByEmail(email)
  }
}