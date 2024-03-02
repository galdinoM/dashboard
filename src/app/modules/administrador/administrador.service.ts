import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/db/prisma/prisma.service';

@Injectable()
export class AdministradorService {
  constructor(private prismaService: PrismaService) { }

  async create(data: any): Promise<any> {
    return this.prismaService.administrador.create({ data });
  }

  async findAll(): Promise<any[]> {
    return this.prismaService.administrador.findMany();
  }

  async findOneByEmail(email: string): Promise<any | null> {
    return this.prismaService.administrador.findUnique({ where: { email } });
  }

  async findById(id: number): Promise<any | null> {
    return this.prismaService.administrador.findUnique({ where: { id } });
  }

  async remove(id: number): Promise<any> {
    return this.prismaService.administrador.delete({ where: { id } });
  }
}
