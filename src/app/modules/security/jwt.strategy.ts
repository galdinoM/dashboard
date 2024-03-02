import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt.config';
import { AdministradorService } from '../administrador/administrador.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly administradorService: AdministradorService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        const user = await this.administradorService.findById(payload.sub);

        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        if (user.status !== 'ativo') {
            throw new UnauthorizedException('Usuário não está ativo');
        }

        return user;
    }
}
