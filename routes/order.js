import express from "express";
import { order } from "../controllers/order.js";

const router = express.Router();
router.post("/", order);

export default router;