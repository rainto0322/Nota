import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "@/routes/user/user.model";

export const ConvertToken = (name: string, payload: string) => {
  return name + "." + jwt.sign({ id: payload.toString() }, config.SECRET, { expiresIn: '7d' })
}

const SplitToken = (key: string) => {
  const arr = key.split('.')
  const name = arr[0],
    token = arr.slice(1).join(".")
  return { name, token }
}

interface UserType {
  _id: string
  name: string
  psw: string
  email: string
  level: 1
}

export const VerifyToken = async (key: string): Promise<{ user: UserType, token: string }> => {
  const { name, token } = SplitToken(key)
  const user: any = await User.findOne({ name }, { psw: 0 })
  if (!user) throw Error("Token not legal.")
  const data: any = jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) throw Error("Token has expired.")
    return decoded
  })

  if (data.id) {
    const condition = data.id === user._id.toString()
    if (!condition) throw Error("Token invalid.")
  }

  delete user.psw
  return { user, token }
}

export const Permissiton = async (token: string) => {
  try {
    const { user } = await VerifyToken(token)
    if (user.level < 3) throw new Error("You do not have sufficient permissions :(")
  } catch (error: any) {
    throw new Error(error.message)
  }
}