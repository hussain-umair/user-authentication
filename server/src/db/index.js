import Sequelize from 'sequelize'
import dbConfig from './config'

const { database, username, password, ...defaultOptions } = dbConfig

const options = {
  ...defaultOptions,
  logging: console.log,
}
const sequelize = new Sequelize(database, username, password, options)

sequelize
  .authenticate()
  .then(() => {
    console.log('Database is connected ')
  })
  .catch(err => {
    console.log('err=> ', err)
  })

export default sequelize
