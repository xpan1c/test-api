import { products } from "../../../database/inMemoryDB";
import { NotFoundError, ValidationError } from "../../../helper/errors";

export const findProductById = (id: string) => {
    const idToNumber = Number(id)
    if(!idToNumber){
        throw new ValidationError("No es valido")
    }
    const index = products.findIndex(product => product.id === idToNumber);
    if (index === -1) {
        throw new NotFoundError()
    }
    const product = products[index];
    return { product, index };
  };