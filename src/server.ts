import { randomUUID } from 'crypto'
import fastify from 'fastify'
import { knex } from './database.config'
import { env } from './env'

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
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
