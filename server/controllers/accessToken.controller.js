import { refreshTokenBodyValidation } from "../utils/validationSchema.js";
import JwtToken from "../models/JwtToken.js";
import jwt from "jsonwebtoken";
import { verifyRefreshToken } from "../utils/verifyRefreshToken.js";

const createAccessToken = async (req, res) => {
  const { error } = refreshTokenBodyValidation(req.body);
  if (error) return res.status(400).json({ error: true, message: error.details[0].message });
  //verify refreshToken then only create accessToken
  verifyRefreshToken(req.body.refreshToken)
    .then(({ tokenDetails }) => {
      const payload = { _id: tokenDetails._id, roles: tokenDetails.roles };
      //if  valid create new one
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "14m" });
      res.status(200).json({
        error: false,
        accessToken,
        message: "Access token created successfully",
      });
    })
    .catch((error) => res.status(400).json(error));
};

//logout
const deleteToken = async (req, res) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error) return res.status(400).json({ error: true, message: error.details[0].message });

    //find the userToken with the given refreshToken
    const userToken = await JwtToken.findOne({ token: req.body.refreshToken });

    //if userToken  not found
    if (!userToken)
      return res.status(200).json({
        error: false,
        message: "No refresh Token so Logged Out Successfully",
      });

    //if userToken found then delete from db
    await userToken.remove();
    res.status(200).json({ error: false, message: "Logged Out Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

export { createAccessToken, deleteToken };
