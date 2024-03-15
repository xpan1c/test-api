import { RequestHandler } from "express";
import { products } from "../../../database/inMemoryDB";
import { deleteProductById } from "../../services/products/deleteById";

export const deleteProduct: RequestHandler =async (req, res, next) => {
    const {id} = req.params
    deleteProductById(id)
    res.status(204).end()
}