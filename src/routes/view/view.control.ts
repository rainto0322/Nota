import { Handler } from "elysia";
import { View } from "./view.model";

const GetView: Handler = async ({ query: { path } }) => {
    const result: {
        path: string
        time: number
    } = await View.findOneAndUpdate({ path }, {
        // If path exists, add 1 to time
        $inc: { time: 1 },
        // If it does not exist, set the path when creating
        $setOnInsert: { path }
    }, {
        // Create if it does not exist
        upsert: true,
        new: true,
        // Set default values during insertion
        setDefaultsOnInsert: true
    })

    return { ok: true, path, time: result.time }
}

export default {
    GetView
}