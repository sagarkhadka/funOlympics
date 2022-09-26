import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import { loginBodyValidation, registerBodyValidation } from "../utils/validationSchema.js";
import customErrorHandler from "../utils/handleError.js";
import { generateTokens } from "../utils/generateToken.js";

const adminRegister = async (req, res, next) => {
  try {
    const { error } = registerBodyValidation(req.body);
    if (error) {
      return res.status(400).json({ error: true, message: error.details[0].message });
    }
    //if no error then check user already exist
    const user = await Admin.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: true, message: "User already exist with this email" });
    }
    //if does not exist then register
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await new Admin({ ...req.body, password: hashedPassword }).save();
    res.status(201).json({ error: false, message: "Admin has been created successfully" });
  } catch (error) {
    return next(customErrorHandler(500, "Internal Server Error !!!"));
  }
};

const adminLogin = async (req, res, next) => {
  try {
    const { error } = loginBodyValidation(req.body);
    if (error) {
      return res.status(400).json({ error: true, message: error.details[0].message });
    }
    const user = await Admin.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ error: true, message: "This Email user does not exist" });
    }
    //user exist
    const verifiedPassword = await bcrypt.compare(req.body.password, user.password);
    if (!verifiedPassword) {
      return res.status(401).json({ error: true, message: "Password does not match" });
    }
    //matched then create refreshToken & accessToken
    const { accessToken, refreshToken } = await generateTokens(user);

    //cookie
    res
      .cookie("cookie", accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 14, //14 min
      })
      .json({
        error: false,
        message: "Admin Logged In Successfully",
        accessToken,
        refreshToken,
        Credentials: "include",
      });
  } catch (error) {
    console.log(error)
    // return next(customErrorHandler(500, "Internal Server Error !!!"));
  }
};

export { adminRegister, adminLogin };
