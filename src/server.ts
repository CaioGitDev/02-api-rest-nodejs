import { randomUUID } from 'crypto'
import fastify from 'fastify'
import { knex } from './database.config'

const app = fastify()

app.get('/transactions', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: randomUUID(),
      title: 'Luz',
      amount: 39,
    })
    .returning('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
