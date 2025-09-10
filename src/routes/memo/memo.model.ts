import { defineMongooseModel, options } from "@/utils/mongodb"

// User Model
export const Memo = defineMongooseModel('memo', {
  date: {
    type: Number,
    default: Math.floor(Date.now() / 1000)
  },
  text: {
    type: String,
    required: true,
    minlength: [5, "409:Memo content can't be less than 5 bytes"],
    maxlength: [500, "409:Memo content can't be exceed than 500 bytes"]
  },
  img: [{
    type: String
  }]
}, options)