import supertest from 'supertest'
import { expect, it, describe, afterAll, beforeAll } from 'vitest'
import { products } from '../../src/database/inMemoryDB'
import { app } from "../../src/server"
let server;

beforeAll(() => {
  server = app.listen()
});

afterAll(() => {
  server.close();
});

describe('Testing category GET method', () => {
  it('Should respond OK status and return a product.', async () => {
    const response = await supertest(server).get(`/products/1`)

    expect(response.status).toBe(200)
    expect(response.body).toStrictEqual(products.find(p => p.id === 1)) 
  })

  it('Should respond 404 status if product id does not exist.', async () => {
    const response = await supertest(server).get(`/products/6`)

    expect(response.status).toBe(404)
    expect(response.body.message).toBe("No existe el producto")
  })
})
