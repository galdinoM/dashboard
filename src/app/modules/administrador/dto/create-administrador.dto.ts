import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdministradorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}
