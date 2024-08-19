import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import {formatResponse} from "../../helpers";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto){
    await this.authService.register(registerDto)
    const user = await this.userService.findOneByEmail(registerDto.email)

    return formatResponse({ id: user.id })
  }

  @Post('login')
  async login(@Body() loginDto: RegisterDto){
    return this.authService.login(loginDto)
  }
}
