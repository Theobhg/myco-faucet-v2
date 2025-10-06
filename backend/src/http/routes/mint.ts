import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { mintAndTransfer } from '../../providers/web3-provider.js'

const mintSchema = z.object({
  to: z.string(),
})

export async function mint(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/mint', { schema: { body: mintSchema } }, async (request, reply) => {
    const { to } = request.body
    const tx = await mintAndTransfer(to)
    return reply.send({ message: 'Minting tokens...', tx })
  })
}
