import { Place } from "../models/Place.js";
import defaultResponse from "../helpers/response.js";

const place = {
  read: async (req, res, next) => {
    try {
      const place = await Place.find().select(
        " -_id  -createdAt -updatedAt -__v"
      );
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { place };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      await Place.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "place created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      let places = await Place.findOne({ cityId: req.params.id })
        .populate("cityId", " -_id  -createdAt -updatedAt -__v")
        .select(" -_id  -createdAt -updatedAt -__v");
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { places };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default place;
