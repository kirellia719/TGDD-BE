import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cart.js";

const router = express.Router();
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.get("/:id", getCart);

export default router;