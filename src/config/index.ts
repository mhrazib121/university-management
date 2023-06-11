import dotenv from 'dotenv'
import path from 'path'
// import logger from '../shared/logger'

dotenv.config({ path: path.join(process.cwd(), '.env') })
// logger.info(process)
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
