import { Elysia } from "elysia";
import ConnectDatabase from "./database/connect";

import routes from "./routes";
// Plugins
import errorHandle from "./plugins/error.handle";
import logger from "./plugins/logger.handle";
import corsHandle from "./plugins/cors.handle";

// connect to mongodb
await ConnectDatabase()

// create a Elysia model
const app = new Elysia()
  .use(logger)
  .use(corsHandle)
  .use(errorHandle)
  .use(routes)

if (process.env.NODE_ENV !== 'production') {
  const { swagger } = await import('@elysiajs/swagger')
  app.use(swagger())
}


export default app