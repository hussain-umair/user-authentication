import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config()
export const apiRoot = resolve(__dirname, '../api')
export const JWT_SECRET = process.env.JWT_SECRET
export const REDIS_HOST = process.env.REDIS_HOST
export const REDIS_PORT = process.env.REDIS_PORT
