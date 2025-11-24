import { Elysia, t } from "elysia";
import schema from "./view.schema";
import control from "./view.control";

const viewRoute = new Elysia({ prefix: "/view" })
  // GET /view/:path
  .get('/', control.GetView, schema.GetViewSchema)

export default viewRoute