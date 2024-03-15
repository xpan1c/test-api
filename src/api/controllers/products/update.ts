import { RequestHandler } from "express";
import { products } from "../../../database/inMemoryDB";
import { updateProductById } from "../../services/products/updateById";

export const updateProduct: RequestHandler = (req, res, next) => {
    const { id } = req.params
    const { price, quantity } = req.body
    const updatedProduct = updateProductById(id, price,quantity)
    res.status(200).json(updatedProduct)
}