import { Inject, Injectable } from '@nestjs/common'
import { PassportSerializer } from '@nestjs/passport'
import { AuthService } from '../../auth.service'
import { User } from 'src/schemas/User.schema'

@Injectable()
export default class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super()
  }
  serializeUser = (user: User, done: Function) => done(null, user)

  deserializeUser = async (payload: any, done: Function) => {
    const user = await this.authService.findUser(payload.Email)
    return user ? done(null, user) : done(null, null)
  }
}
