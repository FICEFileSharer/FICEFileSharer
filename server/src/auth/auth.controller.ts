import { Controller, Get, UseGuards } from '@nestjs/common'
import GoogleAuthGuard from './utils/Google/GoogleAuthGuard'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  constructor() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  handleGoogleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  handleGoogleRedirect() {}

  @UseGuards(AuthGuard('github'))
  @Get('github/login')
  handleGitHubLogin() {}

  @UseGuards(AuthGuard('github'))
  @Get('github/redirect')
  handleGitHubRedirect() {}
}
