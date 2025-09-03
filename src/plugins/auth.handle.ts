import { Elysia, Context } from "elysia";
import { Permissiton } from "@/utils/auth";

export default (app: Elysia) =>
  app.onBeforeHandle(async ({ status, headers }: Context) => {
    try {
      // verify cookies
      const auth = headers['authorization']
      if (!auth) {
        throw new Error("You don't have permission")
      }
      await Permissiton(auth)
    } catch (error: any) {
      throw status(401, error.message)
    }

  })