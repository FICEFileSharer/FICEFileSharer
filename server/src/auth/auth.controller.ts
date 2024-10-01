import { Controller, Get } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('google/login')
  handleLogin() {
    return { msg: 'boom' }
  }

  @Get('google/redirect')
  handleRedirect() {
    return { msg: 'redirecting...' }
  }
}
