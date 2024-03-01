import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministradorModule } from './app/modules/administrador/administrador.module';

@Module({
  imports: [AdministradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
