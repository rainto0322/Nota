import { t } from "elysia";

const RegisterSchema = {
  body: t.Object({
    name: t.String({ minLength: 2, maxLength: 8 }),
    psw: t.String({
      minLength: 8,
      maxLength: 20,
      pattern: '^(?=.*[a-zA-Z])(?=.*\\d).+$',
    }),
    email: t.String({ format: 'email' })
  })
}

const LoginSchema = {
  body: t.Object({
    name: t.String({ minLength: 2, maxLength: 8 }),
    psw: t.String({
      minLength: 8,
      maxLength: 20,
      pattern: '^(?=.*[a-zA-Z])(?=.*\\d).+$',
    })
  })
}

export default {
  RegisterSchema,
  LoginSchema
}
