import { defineMongooseModel, options } from "@/utils/mongodb";

// Album Model
export const Album = defineMongooseModel(
  "album",
  {
    name: {
      type: String,
      unique: [true, "409:This image has already been registered."],
    },
    sha: {
      type: String,
    },
    group: {
      type: String,
      default: "daily",
    },
  },
  options,
);
