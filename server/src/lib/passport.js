import pp from 'passport'
import LocalStrategy from 'passport-local'
import User from '../db/models/user'

pp.serializeUser((user, done) => done(null, user.id))

pp.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      // verify email password
      const user = await User.authenticate(email, password).catch(error =>
        done(error.message),
      )

      if (user) {
        done(null, user)
      }
    },
  ),
)

export const passport = pp
