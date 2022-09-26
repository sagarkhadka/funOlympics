import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const registerBodyValidation = (body) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(body);
};

const loginBodyValidation = (body) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(body);
};

const refreshTokenBodyValidation = (body) => {
  const schema = joi.object({
    refreshToken: joi.string().required().label("Refresh Token"),
  });
  return schema.validate(body);
};

export { registerBodyValidation, loginBodyValidation, refreshTokenBodyValidation };
