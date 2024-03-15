import supertest from 'supertest'
import { expect, it, describe, beforeAll, afterAll } from 'vitest'
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
  it('Should respond OK status and return products as an array.', async () => {
    const response = await supertest(server).get(`/products`)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)   
    expect(response.body).toStrictEqual(products) 
  })
  
})
