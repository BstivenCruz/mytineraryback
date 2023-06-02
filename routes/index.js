import express from "express";
import userRouter from "./users.js";
import cityRouter from "./cities.js";
import placeRouter from "./places.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "index" });
});

router.use("/users", userRouter);
router.use("/cities", cityRouter);
router.use("/places", placeRouter);

export default router;
