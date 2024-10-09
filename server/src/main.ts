import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as ms from 'ms'
import * as passport from 'passport'
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.use(
    session({
      name: 'SESSION_ID',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: ms('15 minutes'),
      },
    }),
  )
  app.use(cookieParser())
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3001)
}
bootstrap()
