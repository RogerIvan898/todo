import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtTokenService {
  readonly JWT_SECRET = 'super-secret'
  readonly JWT_REFRESH_SECRET = 'super-secret-refresh'

  private generateJwtToken(data: {id: string, email: string}, key: string, expiresIn: string){
    return jwt.sign(data, key ,{expiresIn: expiresIn})
  }

  private verifyJwtToken(token: string, key: string){
    return jwt.verify(token, key) as {id: number, email: string}
  }

  generateAccessJwtToken(id: string, email: string){
    return this.generateJwtToken({id, email}, this.JWT_SECRET, '1h')
  }

  generateRefreshJwtToken(id: string, email: string){
    return this.generateJwtToken({id, email}, this.JWT_REFRESH_SECRET, '7d')
  }

  verifyAccessJwtToken(token: string){
    return this.verifyJwtToken(token, this.JWT_SECRET)
  }

  verifyRefreshJwtToken(token: string){
    return this.verifyJwtToken(token, this.JWT_REFRESH_SECRET)
  }
}
