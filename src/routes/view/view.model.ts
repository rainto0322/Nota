import { defineMongooseModel, options } from "@/utils/mongodb"

// User Model
export const View = defineMongooseModel('view', {
    path: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    time: {
        type: Number,
        default: 1
    },

}, options)