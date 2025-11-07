import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/types/auth-response.types';

export class RegisterDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;


  @ApiProperty({ description: 'Phone number', example: '+1234567890' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ description: 'User role', enum: Role, example: Role.CUSTOMER })
  @IsEnum(Role)
  role: Role;
}
