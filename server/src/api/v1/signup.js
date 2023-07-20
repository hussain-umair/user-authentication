import User from '../../db/models/user'
import { saveUser } from '../../lib/middleware'

const handler = app =>
  app.post('/signup', saveUser, async (req, res) => {
    const {
      body: { firstName, lastName, email, password },
    } = req

    await User.create({
      firstName,
      lastName,
      email,
      password,
    })
    // console.log('body======> ', body)
    res.status(200).json({ body })
  })

export default handler
