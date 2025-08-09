import conf from "@/config";
import consola from "@/utils/consola";

const $fetch = async (params: string, query: string, options?: object) => {
  try {
    const url = `https://api.gitcode.com/api/v5/repos/${conf.GIT_REPO}${params}?access_token=${conf.GIT_TOKEN}${query}`
    const opts = Object.assign({
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
    }, options)

    const response = await fetch(url, opts)
    if (!response.ok) throw new Error("Bad request")

    const data = await response.json()
    return data
  } catch (error: any) {
    throw new Error(error.message)

  }
}

export {
  $fetch
}