import { Elysia, Context } from "elysia";

export default (app: Elysia) =>
  app.onAfterResponse(({ set }: Context) => {
    set.headers['Access-Control-Allow-Origin'] = "*"
    set.headers['Access-Control-Allow-Methods'] = "GET,POST,PUT,DELETE,OPTIONS"
    set.headers['Access-Control-Allow-Headers'] = "Content-Type,Authorization"
    set.headers['Content-Type'] = "text/plain; charset=utf-8"
  })