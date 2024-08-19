import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {formatResponse} from "../../helpers";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

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
  async login(@Body() loginDto: RegisterDto){
    try {
      const { token } = await this.authService.login(loginDto);
      return formatResponse({token})
    }
     catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.UNAUTHORIZED);
    }
  }
}