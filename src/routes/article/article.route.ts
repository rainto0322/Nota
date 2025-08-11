import { Elysia, t } from "elysia";
import schema from "./article.schema";
import control from "./article.control";
import Auth from "@/plugins/auth.handle";

const ArticleRoute = new Elysia({ prefix: "/art" })
  // GET /memo/:id
  .get("/:id", control.GetArt, schema.GetArtSchema)
  .get("/li/:page/:size", control.GetArtList, schema.GetArtListSchema)
  // .use(Auth)
  .post("/", control.PostArt, schema.PostArtSchema)
  .put("/", control.UpdateArt, schema.UpdateSchema)
  .delete("/:id", control.DeleteArt, schema.PostArtSchema);

// .use(Auth)
export default ArticleRoute;
