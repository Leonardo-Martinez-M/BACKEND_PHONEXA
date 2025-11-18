import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'dos@gmail.com',
    description: 'Email del usuario',
    format: 'email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    example: 'Admin1234',
    description: 'Contraseña del usuario',
    minLength: 8,
  })
  password: string;
}
