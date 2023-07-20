import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()


export const setupApp = async () => {
  setupMiddlewares(app)
  await setupRoutes(app)
  return app
}

export default app
