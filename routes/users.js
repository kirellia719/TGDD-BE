import express from "express";
import { getAllEmployee } from "../controllers/user.js";

const router = express.Router();
router.get("/", getAllEmployee)

export default router;