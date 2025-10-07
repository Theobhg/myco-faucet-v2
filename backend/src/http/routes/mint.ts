import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { mintAndTransfer } from '../../providers/web3-provider.js'

const mintSchema = z.object({
  wallet: z.string(),
})

const nextMint = new Map<string, number>()

export async function mint(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/mint/:wallet',
    {
      schema: {
        params: mintSchema,
      },
    },
    async (request, reply) => {
      const { wallet } = request.params
      if (nextMint.has(wallet) && nextMint.get(wallet)! > Date.now()) {
        return reply.status(429).send({ message: 'You can only mint once per day. Try again tomorrow.' })
      }

      try {
        const tx = await mintAndTransfer(wallet)
        reply.send({ message: 'Minting tokens...', tx })
      } catch (error) {
        reply.status(500).send({ message: 'Error minting tokens', error })
      }

      nextMint.set(wallet, Date.now() + 1000 * 60 * 60 * 24)
    },
  )
}
