import { Elysia, Context } from "elysia";
import { Permissiton } from "@/utils/auth";

export default (app: Elysia) =>
  app.onBeforeHandle(async ({ status, cookie: { nota_auth, nota_token } }: Context) => {
    try {

      if (!nota_auth.value || !nota_token.value) {
        throw new Error("You don't have permission")
      }

      await Permissiton(nota_token.value)

    } catch (error: any) {
      nota_token.remove()
      nota_auth.remove()
      throw status(401, error.message)
    }

  })