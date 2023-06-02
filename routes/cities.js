import express from "express";
import validator from "../middlewares/validator.js";
import citySchema from "../schemas/city.js";
import city from "../controllers/cities.js";
const { read, create } = city;

const router = express.Router();

router.get("/", read);
router.post("/", validator(citySchema), create);

export default router;
