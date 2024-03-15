import { products } from "../../../database/inMemoryDB";
import { findProductById } from "./findById";

export const updateProductById = (id: string, price: number, quantity: number) => {
    const {product, index} = findProductById(id);
        const updatedProduct = { ...product, price, quantity };
        products[index] = updatedProduct;
        return updatedProduct;
};