import express from "express";
import passport from "../config/passport.js";
import passwordOk from "../middlewares/passwordOk.js";
import user from "../controllers/users.js";
const { signup, signin, signout, read } = user;
import accountExist from "../middlewares/accountExist.js";
const { existSignin, existSignup } = accountExist;

const router = express.Router();

/* GET users listing. */

router.get("/", read);
router.post("/signup", existSignup, signup);
router.post("/signin", existSignin, passwordOk, signin);
router.put(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

export default router;
