import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-github2'
import { AuthService } from 'src/auth/auth.service'

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['user:email'],
    })
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: Function,
  ) {
    try {
      //   const { id, username, emails } = profile
      //   const user = {
      //     githubId: id,
      //     username: username,
      //     email: emails[0].value,
      //     accessToken,
      //   }

      console.log(profile)
      done(null, null) // Call the done function with the user info
    } catch (err) {
      done(err, false)
    }
  }
}
