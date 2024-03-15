import express, { Request, Response } from "express";
import { listProducts } from "../controllers/products/list";
import { getProduct } from "../controllers/products/get";
import { createProduct } from "../controllers/products/create";
import { updateProduct } from "../controllers/products/update";
import { deleteProduct } from "../controllers/products/delete";

const router = express.Router();

// POST product
router.post("/", createProduct);
// GET all products
router.get("/", listProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);



export default router;
