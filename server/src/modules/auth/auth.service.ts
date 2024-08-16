import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {formatResponse, hashPassword, validatePassword} from "../../helpers";
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'super-secret'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  generateJwtToken(id: string, email: string){
    return jwt.sign({ id, email }, JWT_SECRET ,{expiresIn: '1h'})
  }

  verifyToken(token: string){
    return jwt.verify(token, JWT_SECRET)
  }

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

  async login(loginDto: RegisterDto){
    const { email, password } = loginDto

    const user = await this.userService.findOneByEmail(email)

    if (!user  || !validatePassword(password, user.password)) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const token = this.generateJwtToken(user.id, user.email)

    return {
      ...user,
      token
    }
  }
}