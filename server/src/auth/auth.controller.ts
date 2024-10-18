import { Controller, Get, UseGuards } from '@nestjs/common'
import GoogleAuthGuard from './utils/Google/GoogleAuthGuard'

@Controller('auth')
export class AuthController {
  constructor() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  handleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  handleRedirect() {}
}
