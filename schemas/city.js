import Joi from "joi-oid";

const citySchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  pais: Joi.string().min(1).max(50).required(),
  photo: Joi.string().uri().min(1).max(50).required().messages({
    "any.required": "This field is empty! please complete",
  }),
  population: Joi.number().required(),
});
export default citySchema;
