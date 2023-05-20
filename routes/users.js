import express from "express";
import passport from "passport";
import user from "../controllers/users.js";
const { signup, signin, signout , read} = user;

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("user");
});

router.get("/", read);
router.post("/signup", signup);
router.post("/signin", signin);
router.put(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

export default router;
