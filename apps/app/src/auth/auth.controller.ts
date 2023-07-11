import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { AuthLoginUserDto } from './dtos/authLoginUserDto';
  import { AuthRegisterUserDto } from './dtos/authRegisterUserDto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private awsCognitoService: AuthService) {}
  
    @Post('/register')
    async register(@Body() authRegisterUserDto: AuthRegisterUserDto) {
      return await this.awsCognitoService.registerUser(authRegisterUserDto);
    }
  
    @Post('/login')
    @UsePipes(ValidationPipe)
    async login(@Body() authLoginUserDto: AuthLoginUserDto) {
      return await this.awsCognitoService.authenticateUser(authLoginUserDto);
    }
  }