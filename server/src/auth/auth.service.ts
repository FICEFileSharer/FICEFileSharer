import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/schemas/User.schema'
import { Model } from 'mongoose'
import { UserDTO } from 'src/dto/user.dto'
import { UsersService } from 'src/users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private user: Model<User>,
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser = async (userDTO: UserDTO) => {
    const validatedUser = await this.findUser(userDTO.Email)
    if (validatedUser) return userDTO
    await this.usersService.create(userDTO)
  }

  findUser = async (email: string) => await this.user.findOne({ Email: email })

  generateJwt = (user: any) => {
    const payload = { email: user.email, sub: user.id }
    return this.jwtService.sign(payload)
  }
}
