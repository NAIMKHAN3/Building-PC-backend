import { Router } from "express";
import { getProductByCategory, getProductById, getProducts } from "./product.controller";
import { verifyParams } from "../../middleware/verifyParams";

const router = Router();

router.get('/products', getProducts);
router.get('/category-products/:id',  getProductByCategory);
router.get('/single-product/:id', verifyParams, getProductById);

export default router;