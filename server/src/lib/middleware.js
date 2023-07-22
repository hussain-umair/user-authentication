import User from '../db/models/user'

export const saveUser = async (req, res, next) => {
  try {
    const email = await User.findOne({
      where: {
        email: req.body.email,
      },
    })

    if (email) {
      return res.status(409).json({ message: 'email already taken' })
    }

    next()
  } catch (err) {
    console.log(err)
  }
}
