import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { mintAndTransfer } from '../../providers/web3-provider.js'

const mintSchema = z.object({
  wallet: z.string(),
})

export async function mint(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/mint/:wallet',
    {
      schema: {
        params: mintSchema,
      },
    },
    async (request, reply) => {
      try {
        const { wallet } = request.params
        const tx = await mintAndTransfer(wallet)
        return reply.send({ message: 'Minting tokens...', tx })
      } catch (error) {
        return reply.status(500).send({ message: 'Error minting tokens', error })
      }
    },
  )
}
