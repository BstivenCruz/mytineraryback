import { User } from "../models/User.js";
import defaultResponse from "../helpers/response.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const user = {
  signup: async (req, res, next) => {
    req.body.verified = false;
    req.body.logged = false;
    req.body.code = crypto.randomBytes(10).toString("hex");
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    try {
      await User.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "user created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  signin: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { email: req.body.email },
        { logged: true }
      ).select("-_id  -createdAt -updatedAt -__v -password -code");
      const token = jwt.sign({ id: req.user.id }, process.env.KEY_JWT, {
        expiresIn: 60 * 60 * 24,
      });
      const  msg = 'welcome'
      req.body.success = true;
      req.body.sc = 200;
      req.body.data = { user, token ,msg};
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  signout: async (req, res, next) => {
    const { email } = req.user;
    try {
      await User.findOneAndUpdate({ email }, { logged: false }, { new: true });
      req.body.success = true;
      req.body.sc = 200;
      req.body.data = "come back soon!";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const users = await User.find().select(
        "-_id  -createdAt -updatedAt -__v"
      );
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { users };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default user;
