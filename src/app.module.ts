import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministradorModule } from './app/modules/administrador/administrador.module';
import { AuthModule } from './app/modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({ isGlobal: true }),
    AdministradorModule, 
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
