import { Elysia, Context } from "elysia";
import consola from "../utils/consola";

export default (app: Elysia) =>
  app.onBeforeHandle(({ request, path, status }: Context) => {
    if (request.method === "OPTIONS") throw status(200, "success")
    consola.RequestMethod(request.method, path)
  })