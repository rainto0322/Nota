import app from "./src/app";
import consola from './src/utils/consola'
import config from "./src/config";

async function start() {
  try {
    consola.info('Opening Nota REST API service ...')
    await app.listen(config.PORT)
    consola.success(`Service started on ${app.server?.hostname}:${app.server?.port}`)
  } catch (error: any) {
    consola.error('MongoDB connection failed:' + error.message)
    process.exit(404)
  }
}

start()