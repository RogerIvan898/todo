import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {formatResponse, hashPassword} from "../../helpers";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto

    if (await this.userService.isUserExists(email)) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST)
    }

    const { salt, hash } = hashPassword(password)

    const user = await this.userService.create({
      email,
      password: `${salt}:${hash}`
    })

    return formatResponse(user)
  }
}