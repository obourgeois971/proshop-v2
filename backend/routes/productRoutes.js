import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsBtId,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsBtId);

export default router;
