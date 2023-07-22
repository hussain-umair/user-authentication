import { DataTypes } from 'sequelize'
import sequelize from '..'
import bcrypt from 'bcryptjs'
import { AuthenticationError } from '../../lib/errors'

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue('password')
      },
      set(password) {
        this.setDataValue('password', bcrypt.hashSync(password, 10))
      },
    },
  },
  {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  },
)

User.prototype.validatePassword = function (password) {
  if (!this.password) return false

  return bcrypt.compareSync(password, this.password)
}

User.authenticate = async (email, password) => {
  const user = await User.unscoped().findOne({ where: { email } })

  if (user && user.validatePassword(password)) {
    return User.findByPk(user.id)
  }

  throw new AuthenticationError('Invalid email or password')
}

export default User
