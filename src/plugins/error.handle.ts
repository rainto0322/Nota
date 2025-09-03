import { Elysia } from "elysia";
import consola from "../utils/consola";

interface ElysiaError {
  code?: number;
  response?: string;
}

export default (app: Elysia) =>
  app.onError(({ code, status, error }) => {
    const msg = (error as ElysiaError).response || error.toString()
    consola.error(msg);

    if (code === 'NOT_FOUND') {
      return status(404, {
        msg: "Route Not Found :(",
        ok: false,
        code: 404,
      })
    }

    if (code === 'VALIDATION') {
      return status(400, {
        msg: "Bad Request! :(",
        ok: false,
        code: 400,
      })
    }

    if (msg.includes('409:')) {
      return status(409, {
        msg: msg.replace("409:", ""),
        ok: false,
        code: 409,
      })
    }

    return status(code as number, {
      msg: msg || 'Server Error! :(',
      ok: false,
      code,
    })
  })