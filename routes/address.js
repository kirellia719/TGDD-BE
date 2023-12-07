import express from "express";
import { getTinh, getHuyen, getXa} from "../controllers/address.js";

const router = express.Router();
router.get("/tinh", getTinh);
router.get("/tinh/:id", getHuyen);
router.get("/huyen/:id", getXa);

export default router;