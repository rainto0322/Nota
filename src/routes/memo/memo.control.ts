import { Handler, Context } from "elysia";
import { Memo } from "./memo.model";

type memoType = {
  date: number | undefined
  text: string
  img: [string]
}

type listType = {
  page: number
  size: number
}

const GetMemo: Handler = async ({ params: { id }, body }: Context) => {
  const data = await Memo.findById(id)
  return { data, ok: true, msg: "Get Memo successful" }
}

const GetMemoList: Handler = async ({ status, params: { page, size } }: Context) => {
  const p: number = Number(page)
  const s: number = Number(size)
  const data = await Memo.find()
    .sort({ date: -1 })
    .skip((p) * s)
    .limit(s).lean()
  if (data.length <= 0) throw status(400, "Not found moment.")
  const count = await Memo.countDocuments()
  const max = Math.ceil(count / s)
  return { data, count, max, ok: true }
}

const PostMemo: Handler = async ({ body }: Context) => {
  const data = await new Memo(body as memoType).save()
  return { data, msg: "Post memo successful" }
}

const UpdateMemo: Handler = async ({ params: { id }, body }: Context) => {
  const data = await Memo.findByIdAndUpdate(id, body as memoType, { new: true })
  return { data, msg: "Update memo successful" }
}

const DeleteMemo: Handler = async ({ params: { id }, status }: Context) => {
  const data = await Memo.findByIdAndDelete(id)
  if (data === null) throw status(400, "Not found this memo")
  return { msg: "Memo deletion successful" }
}

export default {
  GetMemo,
  GetMemoList,
  PostMemo,
  UpdateMemo,
  DeleteMemo
}