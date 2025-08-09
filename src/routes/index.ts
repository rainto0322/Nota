import { Elysia, t } from "elysia";
import userRoute from "./user/user.route";
import memoRoute from "./memo/memo.route";
import albumRoute from "./album/album.route";

const routes = new Elysia()
  .get('/', () => { return "Hello Nota! ʕ•̮͡•ʔ丿" })
  .options('/*', ({ set }) => {
    return { ok: true }
  })
  .get('/favicon.ico', ({ set }) => {
    set.headers['Content-Type'] = "image/svg+xml"
    return `<svg id="Nota" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><text x="60" y="60" fill="#8942ed" font-family="Times New Roman,sans-serif" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" style="animation:fade 1.5s ease-out .5s infinite;opacity:.8">Nota</text><style>@keyframes fade{50%{opacity:.5}}</style></svg>`
  })
  .use(userRoute)
  .use(memoRoute)
  .use(albumRoute)


export default routes