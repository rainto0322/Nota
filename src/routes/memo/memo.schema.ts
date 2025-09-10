import { t } from "elysia";

const GetMemoSchema = {
  params: t.Object({
    id: t.String()
  })
}

const GetMemoListSchema = {
  params: t.Object({
    page: t.Number({
      minimum: 0,
    }),
    size: t.Number({
      minimum: 2,
      maximum: 50,
      error: 'Size must be between 5 and 50'
    })
  })
}

const MemoSchema = {
  body: t.Object({
    date: t.Number(),
    text: t.String({ minLength: 5, maxLength: 500 }),
    img: t.Array(t.String()),
  })
}

const UpdateMemoSchema = {
  params: GetMemoSchema.params,
  body: t.Object({
    date: t.Number(),
    text: t.String({ minLength: 5, maxLength: 500 }),
    img: t.Array(t.String()),
  })
}

const DeleteMemoSchema = {
  params: GetMemoSchema.params,
}

export default {
  GetMemoSchema,
  GetMemoListSchema,
  MemoSchema,
  UpdateMemoSchema,
  DeleteMemoSchema
}