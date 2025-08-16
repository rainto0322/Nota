import { cors } from "@elysiajs/cors";
import config from "@/config";

export default cors({
  origin: [`http://localhost:${config.PORT}`, 'rainto.top', '*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  exposeHeaders: [],
  allowedHeaders: ['Content-Type', 'Authorization']
})