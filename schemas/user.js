
import Joi from "joi-oid";

const userSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).min(10).max(50).required(),
  password: Joi.string().min(8).max(50).required(),
  photo: Joi.string().uri().min(10).max(200).required(),
});

export default userSchema;
