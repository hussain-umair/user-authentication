import User from '../db/models/user'

export const saveUser = async (req, res, next) => {
  try {
    console.log('req.body.email=> ', req.body.email)
    const email = await User.findOne({
      where: {
        email: req.body.email,
      },
    })

    console.log('email=> ', email)
    if (email) {
      return res.status(409).json({ message: 'email already taken' })
    }

    next()
  } catch (err) {
    console.log(err)
  }
}
