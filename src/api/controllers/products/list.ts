import { RequestHandler } from "express";
import { products } from "../../../database/inMemoryDB";
import { Product } from "../../../models/productModel";

const filterByCategory = (products: Product[], category: string | undefined) => category ? products.filter(product => product.category === category) : products;
const filterByPriceRange = (products: Product[], min: string | undefined, max: string | undefined) => {
    if (min !== undefined && max !== undefined) {
        return products.filter(product => product.price >= Number(min) && product.price <= Number(max));
    } else if (min !== undefined) {
        return products.filter(product => product.price >= Number(min));
    } else if (max !== undefined) {
        return products.filter(product => product.price <= Number(max));
    }
    return products;
};

export const listProducts: RequestHandler = (req, res, next) => {
    const {category, min, max }= req.query
    let filteredProducts = products
    filteredProducts = filterByCategory(filteredProducts, typeof category === 'string' ? category : undefined)
    filteredProducts = filterByPriceRange(filteredProducts, typeof min === 'string' ? min : undefined, typeof max === 'string' ? max : undefined);
    res.status(200).json(filteredProducts)
}