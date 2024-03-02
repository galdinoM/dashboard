import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AuthService } from '../auth/auth.service';


@Controller('auth')
export class AdministradorController {
  constructor(
    private authService: AuthService,
    private administradorService: AdministradorService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<{ token: string }> {
    const { email, password } = body;
    const adminUser = await this.administradorService.findOneByEmail(email);

    if (!adminUser || adminUser.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.authService.generateJwtToken(adminUser);
    return { token };
  }
}
