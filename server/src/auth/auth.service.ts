import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/schemas/User.schema'
import { Model } from 'mongoose'
import { UserDTO } from 'src/dto/user.dto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private user: Model<User>,
    private readonly usersService: UsersService,
  ) {}

  validateUser = async (userDTO: UserDTO) => {
    const validatedUser = this.user.findOne({ email: userDTO.Email })
    if (!validatedUser) return validatedUser
    await this.usersService.create(userDTO)
  }
}
