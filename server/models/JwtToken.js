import mongoose from "mongoose";

const jwtTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  token: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 86400, //30*1day=30day
  },
});

export default mongoose.model("JwtToken", jwtTokenSchema);
