import mongoose from "mongoose";

const entryScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    datetime: { type: Date, required: true },
    location: { type: String, required: true },
    numFed: { type: Number, required: true },
    feedType: { type: String, required: true },
    feedAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Entry = mongoose.model("Entry", entryScheme);

export default Entry;
