import {Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {Response} from "express"
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {formatResponse} from "../../helpers";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('profile')
  async getProfile(@Req() req){
    try {
      return await this.authService.getProfile(req)
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto){
    try {
      await this.authService.register(registerDto)
      const user = await this.userService.findOneByEmail(registerDto.email)

      return { id: user.id }
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.BAD_REQUEST)
    }
  }

  @Post('login')
  async login(@Body() loginDto: RegisterDto, @Res() res: Response){
    try {
      const { token } = await this.authService.login(loginDto)

      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 3600000,
        secure: false,
        sameSite: 'strict'
      })

      return res.status(200).json({message: 'Login successful'})
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.UNAUTHORIZED)
    }
  }
}
