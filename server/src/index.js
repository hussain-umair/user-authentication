import dotenv from 'dotenv'

import { setupApp } from './config/app'

const port = 3001
dotenv.config()

setupApp().then(app => {
  app.listen(port, () => {
    console.log(`server is listening at ${port}`)
  })
})
