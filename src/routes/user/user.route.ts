import { Elysia, t } from "elysia";
import schema from "./user.schema";
import control from "./user.control";

const userRoute = new Elysia({ prefix: "/user" })
  // CURL: POST /user/init
  .get('/init', control.Init)

  // CURL: POST /user/reg
  // PARAMS: body { name, psw, email }
  .post('/reg', control.Register, schema.RegisterSchema)

  // CURL: POST /user/login
  // PARAMS: body { name, psw }
  .post('/login', control.Login)

export default userRoute