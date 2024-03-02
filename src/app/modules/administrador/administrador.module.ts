import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { PrismaService } from 'src/app/db/prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AdministradorController],
  providers: [AdministradorService, PrismaService, AuthService, JwtService],
})
export class AdministradorModule { }
