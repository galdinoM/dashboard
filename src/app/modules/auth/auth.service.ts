import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAdministradorDto } from '../administrador/dto/create-administrador.dto';
import { AdministradorService } from '../administrador/administrador.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private administradorService: AdministradorService
    ) { }

    async generateJwtToken(createAdminDto: CreateAdministradorDto): Promise<string> {
        const adminUser = await this.administradorService.create(createAdminDto);
        const payload = {
            sub: adminUser.id,
            email: adminUser.email
        };
        return this.jwtService.sign(payload);
    }
}
