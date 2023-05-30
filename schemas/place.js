import Joi from "joi-oid";

const placeSchema = Joi.object({
  name: Joi.string().email({ minDomainSegments: 2 }).min(10).max(50).required(),
  photo: Joi.array().items(Joi.string().uri()).required().min(1).messages({
    "any.required": "This field is empty! please complete",
  }),
  capacity: Joi.number().required(),
  cityId: Joi.objectId().required(),
});

export default placeSchema;
