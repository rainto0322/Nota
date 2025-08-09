import { defineMongooseModel, options } from "@/utils/mongodb"

// User Model
export const User = defineMongooseModel('user', {
  name: {
    type: String,
    unique: [true, "409:This name has already been registered."],
    trim: true,
    required: true
  },
  psw: {
    type: String,
    trim: true,
    required: true
  },
  level: {
    type: Number,
    enum: [1, 2, 3],
    default: 1
  },
  email: {
    type: String,
    unique: [true, "409:The same email has already been registered."],
    trim: true,
    required: true
  }
}, options)