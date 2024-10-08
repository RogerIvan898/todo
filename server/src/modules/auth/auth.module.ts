import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserModule} from "../user/user.module";
import {JwtTokenModule} from "../../jwt-token/jwt-token.module";

@Module({
  imports: [UserModule, JwtTokenModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
