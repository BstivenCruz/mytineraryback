import express from "express";
import city from "../controllers/cities.js";
const { read } = city;

const router = express.Router();

router.get("/", read);

export default router;
