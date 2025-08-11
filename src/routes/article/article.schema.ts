import { t } from "elysia";

const GetArtSchema = {
  params: t.Object({
    id: t.String(),
  }),
};

const GetArtListSchema = {
  params: t.Object({
    page: t.Number({
      minimum: 0,
    }),
    size: t.Number({
      minimum: 2,
      maximum: 50,
      error: "Size must be between 5 and 50",
    }),
  }),
};

const PostArtSchema = {
  body: t.Object({
    title: t.String({ minLength: 10, maxLength: 200 }),
    cont: t.String({ minLength: 20 }),
    tag: t.Array(t.String()),
  }),
};

const UpdateSchema = {
  params: GetArtSchema.params,
  body: PostArtSchema.body,
};

const DeleteArtSchema = {
  params: GetArtSchema.params,
};

export default {
  GetArtSchema,
  GetArtListSchema,
  PostArtSchema,
  UpdateSchema,
  DeleteArtSchema,
};
