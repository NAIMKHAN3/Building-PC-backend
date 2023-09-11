import { Router } from "express";
import { getProductById, getProducts } from "./product.controller";
import { verifyParams } from "../../middleware/verifyParams";

const router = Router();

router.get('/products', getProducts);
router.get('/single-product/:id', verifyParams, getProductById);

export default router;