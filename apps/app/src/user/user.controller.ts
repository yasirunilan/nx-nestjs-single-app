import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto, DTO } from '@lib/database';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
      return this.userService.getUsers();
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
      return this.userService.getUser(id);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Post()
    addUser(@Body() payload: CreateUserDto) {
      return this.userService.addUser(payload);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() payload: DTO.UserUpdateInput) {
      return this.userService.updateUser(id, payload);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
      return this.userService.deleteUser(id);
    }
  }
  