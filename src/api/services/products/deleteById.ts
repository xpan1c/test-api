import { products } from "../../../database/inMemoryDB";
import { findProductById } from "./findById";

export const deleteProductById = (id: string) => {
    const {index} = findProductById(id)
    products.splice(index, 1)
};