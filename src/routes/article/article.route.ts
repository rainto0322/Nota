import { Elysia, t } from "elysia";
import schema from "./article.schema";
import control from "./article.control";
import Auth from "@/plugins/auth.handle";

const ArticleRoute = new Elysia({ prefix: "/art" })
  // GET /memo/:id
  .get("/:id", control.GetArt, schema.GetArtSchema)
  // GET /art/li/:page/:size
  .get("/li/:page/:size", control.GetArtList, schema.GetArtListSchema)

  .use(Auth)
  // POST /art
  // PARAMS: body { title, cont, tag }
  .post("/", control.PostArt, schema.PostArtSchema)
  // PUT /art
  // PARAMS: body { title, cont, tag }
  .put("/", control.UpdateArt, schema.UpdateSchema)
  // DELETE /art/:id
  .delete("/:id", control.DeleteArt, schema.PostArtSchema);

// .use(Auth)
export default ArticleRoute;
