import { Elysia, t } from "elysia";
import userRoute from "./user/user.route";
import memoRoute from "./memo/memo.route";
import articleRoute from "./article/article.route";
import staticRoute from "./static/static.route";
import viewRoute from "./view/view.route";

const routes = new Elysia()
  .use(viewRoute)
  .use(memoRoute)
  .use(articleRoute)
  .use(userRoute)
  .use(staticRoute)

export default routes;
