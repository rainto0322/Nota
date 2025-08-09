import { Elysia } from "elysia";
import Auth from "@/plugins/auth.handle";
import control from "./album.control";
import schema from "./album.schema";

const albumRoute = new Elysia({ prefix: "/img" })
  .post('/', control.PostImage, schema.AlbumSchema)
  .delete('/:name', control.DeleteImage, schema.DeleteAlbumSchema)

export default albumRoute