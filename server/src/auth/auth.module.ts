import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GoogleStrategy } from './utils/GoogleStrategy'
import GoogleAuthGuard from './utils/GoogleAuthGuard'

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, GoogleAuthGuard],
})
export class AuthModule {}
