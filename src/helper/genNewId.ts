import { products } from "../database/inMemoryDB";

let lastId = products.length 
export function generateNewId(): number {
    lastId += 1;
    return lastId;
}