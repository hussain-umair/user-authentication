import express from 'express'
import session from 'express-session'
import cors from 'cors'
import RedisStore from 'connect-redis'
import { JWT_SECRET } from './constants'
import { redis } from '../services/cache'
import { passport } from '../lib/passport'

const store = new RedisStore({ client: redis })

const sessionConfig = {
  store,
  name: 'session',
  secret: JWT_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
  },
}

const setupMiddlewares = app => {
  app.use(express.json())
  app.use(cors())
  app.use(session(sessionConfig))
  app.use(passport.initialize())
  app.use(passport.session())
}

export default setupMiddlewares
