import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";
import { Handler, Context } from "elysia";
import { User } from "./user.model";
import { ConvertToken, VerifyToken } from "@/utils/auth";

type userType = {
  name: string
  psw: string
  email: string
}

/**
 * @fetch POST /user/reg
 * @body  { name, psw, email }
 */
const Register: Handler = async ({ body }: Context) => {
  const { name, psw, email } = body as userType

  const user = {
    name,
    psw: hashSync(psw, genSaltSync(10)),
    email,
    level: 1
  }

  const empty = await User.findOne({ level: 3 })
  if (empty === null) user.level = 3

  const data: any = (await new User(user, { psw: 0 }).save()).toJSON()
  delete data.psw
  if (data) return {
    user: data,
    msg: `User "${user.name}" registration successful.`
  };
}

/**
 * @fetch POST /user/login
 * @cookie { nota_token, nota_auth  }
 * @body  { name, psw, email }
 */
const Login: Handler = async ({
  body,
  status,
  cookie: { nota_token, nota_auth }
}: Context) => {
  const { name, psw } = body as userType

  if (nota_auth.value && nota_token.value) {
    // login use token
    try {
      const { user } = await VerifyToken(nota_token.value) as {
        user: { name: string, psw?: string }
      }
      // set auth token
      delete user.psw
      return { user, ok: true, msg: `${user.name} token login successful` }
    } catch (error: any) {
      nota_token.remove()
      nota_auth.remove()
      throw status(401, error.message)
    }

  } else if (name && psw) {
    // login use password 
    const user: any = await User.findOne({ name }).lean()
    if (!user) throw status(401, "Not found this user")
    const sure = compareSync(psw, user.psw)
    if (!sure) throw status(401, "The password is incorrect")
    const token = ConvertToken(name, user._id)

    // set auth token
    nota_token.set({ value: token, maxAge: 3600 * 24 * 7, httpOnly: true })
    nota_auth.set({ value: true, maxAge: 3600 * 24 * 7, httpOnly: false })

    delete user.psw
    return { user, ok: true, msg: `${user.name} password login successful` }
  } else {
    status(400, {
      msg: "Login failed"
    })
  }
}

/**
 * @fetch POST /user/logout
 * @cookie { nota_token, nota_auth  }
 */
const Logout: Handler = async ({ status, cookie, cookie: { nota_token, nota_auth
} }) => {
  if (nota_auth.value && nota_token.value) {
    nota_token.remove()
    nota_auth.remove()
    delete cookie.nota_auth
    delete cookie.nota_token
    return { ok: true, msg: "Logout successful" }
  } else {
    throw status(400, "Please log in first")
  }
}

export default {
  Register,
  Login,
  Logout
}
