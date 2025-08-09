import { Handler, Context } from "elysia";
import { Album } from "./album.model";
import { $fetch } from "@/utils/gitcode";

const GetMemo: Handler = async ({ params: { id }, body }: Context) => {

}

const PostImage: Handler = async ({ status, body }: Context) => {
  try {
    const { name, content, group: originalGroup } = body as { name: string, content: string, group: string }
    const group = originalGroup || "daily";
    const url = `/contents/${group}/${name}.png`
    // upload image to gitcode
    const demo = await $fetch(url, "", {
      method: "POST",
      body: JSON.stringify({
        content,
        message: Date()
      })
    })
    // get image's sha code
    const image: any = await $fetch(url, "")
    const sha = image.sha
    const data = await new Album({ name, sha, group }).save()
    return { data, ok: true, msg: `Image ${name} upload successful` }
  } catch (error: any) {
    throw status(400, error.message || "Upload failed")
  }
}

const DeleteImage: Handler = async ({ status, params }: Context) => {
  try {
    const { name } = params as { name: string }
    console.log(name);

    const { group, sha } = await Album.findOne({ name }) as { group: string, sha: string }

    await $fetch(`/contents/${group}/${name}.png`, "", {
      method: "DELETE",
      body: JSON.stringify({
        sha,
        message: "delete image"
      })
    })

    await Album.deleteOne({ name })
    return { ok: true, msg: `Image ${name} upload successful` }
  } catch (error: any) {
    throw status(400, error.message || "Upload failed")
  }
}




export default {
  PostImage,
  DeleteImage
}