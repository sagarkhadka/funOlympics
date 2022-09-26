import jwt from "jsonwebtoken";
import JwtToken from "../models/JwtToken.js";

const generateTokens = async (user) => {
  try {
    const payload = { _id: user._id, roles: user.roles };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "14min" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: "30d" });
    //find token bu userId
    const jwtToken = await JwtToken.findOne({ userId: user._id });
    //if userToken exists  then delete  from db and create new one
    if (jwtToken) await userToken.remove();
    //if does not exist create new one
    await new JwtToken({ userId: user._id, token: refreshToken }).save();
    //return both tokens
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(error);
  }
};

export { generateTokens };
