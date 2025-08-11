import { Handler, Context } from "elysia";
import { Art } from "./article.model";

type ArtType = {
  date: number;
  cont: string;
  tag: [string];
};

const GetArt: Handler = async ({ params: { id } }: Context) => {
  const data = await Art.findById(id);
  return { data, ok: true, msg: "Get Memo successful" };
};

const GetArtList: Handler = async ({
  status,
  params: { page, size },
}: Context) => {
  const p: number = Number(page);
  const s: number = Number(size);
  const data = await Art.find()
    .sort({ date: -1 })
    .skip(p * s)
    .limit(s)
    .lean();
  if (data.length <= 0) throw status(400, "Not found moment.");
  const count = await Art.countDocuments();
  const max = Math.ceil(count / s);
  return { data, count, max, ok: true };
};

const PostArt: Handler = async ({ body }: Context) => {
  const data = await new Art(body as ArtType).save();
  return { data, msg: "Post article successful" };
};

const UpdateArt: Handler = async ({ body }: Context) => {
  const data = await Art.findByIdAndUpdate(body as ArtType, { new: true });
  return { data, msg: "Update article successful" };
};

const DeleteArt: Handler = async ({ params: { id }, status }: Context) => {
  const data = await Art.findByIdAndDelete(id);
  if (data === null) throw status(400, "Not found this memo");
  return { msg: "Article deletion successful" };
};

export default {
  GetArt,
  PostArt,
  GetArtList,
  UpdateArt,
  DeleteArt,
};
