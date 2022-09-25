import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    gameType: {
      type: String,
    },

    description: {
      type: String,
    },

    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
