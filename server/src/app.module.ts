import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { JwtTokenModule } from './jwt-token/jwt-token.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, JwtTokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
