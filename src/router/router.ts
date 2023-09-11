import { Router } from "express";
import productRouter from "../module/product/product.index";


const router = Router();

router.use('/product', productRouter)


export default router;