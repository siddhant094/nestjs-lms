/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/user/user.types';
export class RegisterDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
