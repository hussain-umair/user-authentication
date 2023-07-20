import { Router } from 'express'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'
import { apiRoot } from './constants'

const walkApi = async (dir, app) => {
  const items = await readdir(dir)
  for (const item of items) {
    const itemPath = join(dir, item)
    const stats = await stat(itemPath)
    if (stats.isDirectory()) {
      const router = Router({ mergeParams: true })
      app.use(`/${item}`, router)
      await walkApi(itemPath, router)
    } else {
      const handler = await import(itemPath)
      handler.default?.(app)
    }
  }
  return app
}

const setupRoutes = async app => {
  const apiRouter = await walkApi(apiRoot, Router())

  app.use('/api', apiRouter)
}

export default setupRoutes
