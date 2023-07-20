import express from 'express'
import cors from 'cors'

const setupMiddlewares = app => {
  app.use(express.json())
  app.use(cors())
  // app.use()
}

export default setupMiddlewares