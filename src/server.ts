import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Mongoose connect successfully')
    app.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`)
    })
  } catch (error) {
    logger.error('Mongoose connection failed')
  }
}
main();
