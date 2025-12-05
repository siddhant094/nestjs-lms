/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterDto) {
    return this.authService.registerUser(registerUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async GetProfile(@Request() req) {
    const userId: string = req?.user?.sub;

    const user = await this.userService.getUserById(userId);
    return user;
  }
}
