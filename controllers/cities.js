import { City } from "../models/City.js";
import defaultResponse from "../helpers/response.js";

const city = {
  read: async (req, res, next) => {
    try {
      const cities = await City.find().select(
        "-_id  -createdAt -updatedAt -__v"
      );
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { cities };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      await City.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "city created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default city;
