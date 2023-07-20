import jwt from 'jsonwebtoken'

export const createToken = ({ id }) => {
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

export const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET)
