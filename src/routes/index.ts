import { Elysia, t } from "elysia";
import userRoute from "./user/user.route";
import memoRoute from "./memo/memo.route";
import articleRoute from "./article/article.route";
import staticRoute from "./static/static.route";

const routes = new Elysia()
  .use(staticRoute)
  .use(userRoute)
  .use(memoRoute)
  .use(articleRoute)

export default routes;
