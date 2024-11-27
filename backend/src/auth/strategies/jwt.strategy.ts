import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>(process.env.JWT_SECRET),
    });
  }

  async validate(payload: any) {
    const { username, password } = payload;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException('Invalid credentials', 401);
    }
    return user;
  }
}
