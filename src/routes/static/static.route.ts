import { Elysia } from "elysia";
import mongoose from "mongoose";
const staticRoute = new Elysia()
  .get("/", () => {
    return { ok: true, msg: "Hello Nota! ʕ•̮͡•ʔ丿" };
  })
  .get("/stats", async ({ set }) => {
    const response = await fetch('https://raw.gitcode.com/rainto/Album/raw/main/daily/fuck.png')
    set.headers["Content-Type"] = "image/png";
    const imageBuffer = await response.arrayBuffer();
    return imageBuffer
    // const db = mongoose.connection.db;
    // const stats: any = await db?.command({ dbStats: 1 });

    // const bytesToMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2);
    // return {
    //   ok: true,
    //   online: stats.collections || 0,
    //   used: `${bytesToMB(stats.dataSize + stats.indexSize)} MB`
    // }
  })
  .get("/favicon.ico", ({ set }) => {
    set.headers["Content-Type"] = "image/svg+xml";
    return `<svg id="Nota" width="120" height="100" xmlns="http://www.w3.org/2000/svg"><text x="60" y="60" fill="#eb6f92" font-family="Times New Roman,sans-serif" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" style="animation:fade 1.5s ease-out .5s infinite;opacity:.8">Nota</text><style>@keyframes fade{50%{opacity:.4}}</style></svg>`;
  })

export default staticRoute
