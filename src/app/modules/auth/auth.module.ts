import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../security/jwt.config';
import { JwtStrategy } from '../security/jwt.strategy';
import { PrismaService } from 'src/app/db/prisma/prisma.service';
import { AdministradorModule } from '../administrador/administrador.module';
import { AuthService } from './auth.service';
import { AdministradorService } from '../administrador/administrador.service';

@Module({
  imports: [
    AdministradorModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [JwtStrategy, PrismaService, AuthService, AdministradorService],
  exports: [JwtModule],
})
export class AuthModule { }
