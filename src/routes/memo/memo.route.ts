import { Elysia, t } from "elysia";
import schema from "./memo.schema";
import control from "./memo.control";
import Auth from "@/plugins/auth.handle";

const memoRoute = new Elysia({ prefix: "/memo" })
  // GET /memo/:id
  .get('/:id', control.GetMemo, schema.GetMemoSchema)
  // GET /memo/:page/:size
  .get('/li/:page/:size', control.GetMemoList, schema.GetMemoListSchema)

  // .use(Auth)
  // POST /memo
  // PARAMS: body { name, psw, email }
  .post('/', control.PostMemo, schema.MemoSchema)
  // PUT /memo/:id
  // PARAMS: body { name, psw, email }
  .put('/:id', control.UpdateMemo, schema.UpdateMemoSchema)
  // DELETE /memo/:id
  // PARAMS: body { name, psw, email }
  .delete('/:id', control.DeleteMemo, schema.DeleteMemoSchema)

export default memoRoute