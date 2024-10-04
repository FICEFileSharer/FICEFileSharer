import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/schemas/User.schema'
import { Model } from 'mongoose'
import { UserDTO } from 'src/dto/user.dto'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  validateUser = (UserDTO: UserDTO) => {}
}
