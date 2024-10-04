import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/schemas/User.schema'
import { UsersService } from './users.service'
import { UserDTO } from 'src/dto/user.dto'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService, User, UserDTO],
  controllers: [],
})
export class UserModule {}
