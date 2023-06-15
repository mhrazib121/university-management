import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, successLogger } from './shared/logger';
import { Server } from 'http';

let server: Server;

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    successLogger.info('Mongoose connect successfully');
    server = app.listen(config.port, () => {
      successLogger.info(`Server listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Mongoose connection failed');
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();
