import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GoogleStrategy } from './utils/GoogleStrategy'
import GoogleAuthGuard from './utils/GoogleAuthGuard'
import { User, UserSchema } from 'src/schemas/User.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    GoogleAuthGuard,
  ],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AuthModule {}