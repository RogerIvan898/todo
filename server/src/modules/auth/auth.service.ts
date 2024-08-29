import {HttpException, HttpStatus, Injectable, Req, Res} from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {Request, Response} from "express";
import {formatResponse, hashPassword, validatePassword} from "../../helpers";
import * as jwt from 'jsonwebtoken'
import {JwtTokenService} from "../../jwt-token/jwt-token.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtTokenService: JwtTokenService) {}

  async getProfile(@Req() req: Request){
    const token = req.cookies['jwt']

    if(!token){
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const decoded = this.jwtTokenService.verifyToken(token)
    const userId = decoded.id

    const user = await this.userService.findOneById(userId)

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user
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

    const token = this.jwtTokenService.generateJwtToken(user.id.toString(), user.email)

    return {
      ...user,
      token
    }
  }
}