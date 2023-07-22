import User from '../../db/models/user'
import { saveUser } from '../../lib/middleware'

const handler = app =>
  app.post('/signup', saveUser, async (req, res) => {
    const {
      body: { firstName, lastName, email, password },
    } = req

    const user = await User.unscoped().create({
      firstName,
      lastName,
      email,
      password,
    })

    res.status(200).json({ user })
  })

export default handler
