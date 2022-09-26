import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true,
    unique:true,
  },

  password: {
    type: String,
    required:true
  },
  role: {
    type: [String],
    enum: ["admin", "user"],
    default: ["user"],
  },
});

export default mongoose.model("Admins", adminSchema);
