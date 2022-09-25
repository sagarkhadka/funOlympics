import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  role: {
    type: [String],
    enum: ["admin", "user"],
    default: ["user"],
  },
});

export default mongoose.model("User", adminSchema);
