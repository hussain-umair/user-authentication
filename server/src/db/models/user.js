import { DataTypes } from "sequelize";
import sequelize from "..";
import bcrypt from 'bcryptjs'

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
      }
    },

  },
  {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['password'] }
    }
  }
)

export default User
