import User from '../../../db/models/user'

const handler = app =>
  app.get('/', async (req, res) => {
    const users = await User.findAll()
    console.log('users=> ', users)
    res.status(200).json({ users })
  })

export default handler
