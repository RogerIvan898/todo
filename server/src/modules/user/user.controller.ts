import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('is')
  async isUser(@Body('email') email: string){
    return this.userService.isUser(email)
  }
}