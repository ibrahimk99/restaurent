// import joi from "joi"

// export const signUpSchema = joi.object({
//     signUp : joi.object({
//         name : joi.string().required(),
//         email : joi.string().required(),
//         password : joi.string().required(),
//         city: joi.string().required(),
//         address : joi.string().required(),
//         contact : joi.number().required().min(0)
//     }).required()
// })
import Joi from "joi";

export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  contact: Joi.string().pattern(/^[0-9]+$/).required()
}).required();
