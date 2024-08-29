import {Body, Controller, Post} from '@nestjs/common';
import {JwtTokenService} from "./jwt-token.service";

@Controller('jwt-token')
export class JwtTokenController {
  constructor(private jwtTokenService: JwtTokenService) {}

  @Post('is-valid')
  async validJwtToken(@Body() token){
    return !!this.jwtTokenService.verifyToken(token.value)
  }
}
