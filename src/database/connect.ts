import mongoose from 'mongoose';
import consola from "../utils/consola";
import config from "../config";

export default async () => {
  try {
    consola.info('Connecting to MongoDB ...')
    await mongoose.connect(config.DB_URL, {
      dbName: config.DB_NAME
    })
    consola.success(`Successfully connected to MongoDB: ${config.DB_NAME}.`)
  } catch (error: any) {
    consola.error(error.message);
    process.exit(400)
  }
}