import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GoogleStrategy } from './utils/Google/GoogleStrategy'
import GoogleAuthGuard from './utils/Google/GoogleAuthGuard'
import { User, UserSchema } from 'src/schemas/User.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from 'src/users/user.module'
import SessionSerializer from './utils/Google/Serializer'
import { JwtModule } from '@nestjs/jwt'
import { GithubStrategy } from './utils/GitHub/GitHubStrategy'


@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    GithubStrategy,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    GoogleAuthGuard,
    SessionSerializer,
  ],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    JwtModule
  ],
})
export class AuthModule {}
