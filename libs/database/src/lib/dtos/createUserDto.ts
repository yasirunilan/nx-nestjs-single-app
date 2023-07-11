import {
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsOptional()
    @IsInt()
    id?: number;
  
    @IsNotEmpty()
    @IsString()
    username!: string;
  
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;

  }
  