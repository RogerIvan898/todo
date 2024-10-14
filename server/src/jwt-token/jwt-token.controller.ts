import {Body, Controller, HttpException, HttpStatus, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";
import {JwtTokenService} from "./jwt-token.service";

@Controller('jwt-token')
export class JwtTokenController {
  constructor(private jwtTokenService: JwtTokenService) {}

  @Post('is-valid')
  async validJwtToken(@Body() token: string){
    return !!this.jwtTokenService.verifyAccessJwtToken(token)
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response){
    const refreshToken = req.cookies['refreshToken']

    if (!refreshToken) {
      throw new HttpException('Refresh token not found', HttpStatus.UNAUTHORIZED);
    }

    try {
      const { id, email } = this.jwtTokenService.verifyAccessJwtToken(refreshToken);
      const newAccessToken = this.jwtTokenService.generateAccessJwtToken(id.toString(), email);

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        maxAge: 3600000,
        secure: false,
        sameSite: 'strict',
      });

      return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
  }
}
