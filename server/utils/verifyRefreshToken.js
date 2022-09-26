import JwtToken from "../models/JwtToken.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    JwtToken.findOne({ token: refreshToken }, (error, doc) => {
      //if we did not find any document
      if (!doc) return reject({ error: true, message: "Invalid refresh token" });
      //if  found  document verify that
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY, (error, tokenDetails) => {
        //if token is invalid
        if (error) return reject({ error: true, message: "Invalid refresh token" });
        //if token is valid
        resolve({
          tokenDetails,
          error: false,
          message: "Valid refresh token",
        });
      });
    });
  });
};

export { verifyRefreshToken };
