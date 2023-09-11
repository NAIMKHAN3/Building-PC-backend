import { NextFunction, Request, Response } from "express";
import { Product } from "./product.model";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            success: true,
            data: products
        })
    }
    catch (err) {
        next(err)
    }
}
export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
           return res.status(400).send({
            success: false,
            message: "Product Not found"
        }) 
        }
        res.status(200).send({
            success: true,
            data: product
        })
    }
    catch (err) {
        next(err)
    }
}