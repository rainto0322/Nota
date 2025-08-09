import dayjs from "dayjs";

const color: Record<string, string> = {
  GET: "96",
  POST: "95",
  PUT: "94",
  DELETE: "91",
  PATCH: "92",
  OPTIONS: "90",
  HEAD: "97",
  URL: "93",

  info: "90",
  warn: "33",
  error: "31",
  success: "34"
};

const time = () => {
  return '[' + dayjs().format("hh:mm:ss A") + ']'
}

const p = (color: string, params: string) => {
  return `\x1b[${color}m${params}\x1b[0m`
}

export const consola = {
  info: (...args: any[]) => {
    console.log(time(), p(color.info, "[INFO]"), ...args);
  },
  warn: (...args: any[]) => {
    console.log(time(), p(color.warn, "[WARN]"), ...args);
  },
  error: (...args: any[]) => {
    console.log(time(), p(color.error, "[ERROR]"), ...args);
  },
  success: (...args: any[]) => {
    console.log(time(), p(color.success, "[SUCC]"), ...args);
  },
  RequestMethod: (method: string, ...args: any[]) => {
    console.log(time(), p(color[method], `[${method}]`), ...args)
  }
}

export default consola