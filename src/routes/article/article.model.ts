import { defineMongooseModel, options } from "@/utils/mongodb";

// User Model
export const Art = defineMongooseModel(
  "article",
  {
    date: {
      type: Number,
      default: Date.now(),
    },
    title: {
      type: String,
      required: true,
      minlength: [2, "409:Article title can't be less than 2 bytes"],
      maxlength: [2, "409:Article title can't be less than 20 bytes"],
    },
    cont: {
      type: String,
      required: true,
      minlength: [20, "409:Article content can't be less than 20 bytes"],
    },
    tag: [
      {
        type: String,
      },
    ],
    draft: {
      type: Boolean,
    }
  },
  options,
);
