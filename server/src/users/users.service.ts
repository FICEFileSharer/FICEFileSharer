import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDTO } from 'src/dto/user.dto'
import { User } from 'src/schemas/User.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  create = async (userDTO: UserDTO) => {
    console.log(userDTO)
    return await new this.user(userDTO).save()
  }
}
