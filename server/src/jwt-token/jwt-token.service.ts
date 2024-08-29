import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtTokenService {
  readonly JWT_SECRET = 'super-secret'

  generateJwtToken(id: string, email: string){
    return jwt.sign({ id, email }, this.JWT_SECRET ,{expiresIn: '1h'})
  }

  verifyToken(token: string){
    return jwt.verify(token, this.JWT_SECRET) as {id: number, email: string}
  }
}
