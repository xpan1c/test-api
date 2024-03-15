import { RequestHandler } from "express";
import { products } from "../../../database/inMemoryDB";
import { findProductById } from "../../services/products/findById";

export const getProduct: RequestHandler =(req, res, next) => {
    const { id } = req.params
    const { product } = findProductById(id)
    res.status(200).json(product)
}