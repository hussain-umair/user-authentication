import IORedis from 'ioredis'
import { REDIS_HOST, REDIS_PORT } from '../config/constants'

export const redis = new IORedis({
  host: REDIS_HOST || '127.0.0.1',
  port: +REDIS_PORT || 6379,
})
