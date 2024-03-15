import { RequestHandler } from "express";
import { products } from "../../../database/inMemoryDB";
import { Product } from "../../../models/productModel";
import { generateNewId } from "../../../helper/genNewId";

export const createProduct: RequestHandler = (req, res, next) => {
    const {name, category, price, quantity}= req.body
    const id = generateNewId()
    const product : Product = {id,name,category,price,quantity}
    products.push(product)
    res.status(201).end()
}