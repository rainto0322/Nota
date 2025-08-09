import { t } from "elysia";

const AlbumSchema = {
  body: t.Object({
    name: t.String(),
    content: t.String()
  })
}

const DeleteAlbumSchema = {
  params: t.Object({
    name: t.String()
  })
}


export default {
  AlbumSchema,
  DeleteAlbumSchema
}