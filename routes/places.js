import express from "express";
import validator from "../middlewares/validator.js";
import placeSchema from "../schemas/place.js";
import place from "../controllers/places.js";
const { read, create } = place;

const router = express.Router();

router.get("/", read);
router.post("/", validator(placeSchema), create);

export default router;
