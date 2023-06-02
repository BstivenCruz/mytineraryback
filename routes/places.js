import express from "express";
import validator from "../middlewares/validator.js";
import placeSchema from "../schemas/place.js";
import place from "../controllers/places.js";
const { read, create ,getAll } = place;

const router = express.Router();

router.get("/", read);
router.get('/:id',getAll)
router.post("/", validator(placeSchema), create);


export default router;
