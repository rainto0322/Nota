import { t } from "elysia";

const GetViewSchema = {
  query: t.Object({
    path: t.String()
  })
}

export default {
  GetViewSchema
}