import 'dotenv/config'

import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'

import { mint } from './routes/mint.js'

const PORT = Number(process.env.PORT) || 3334

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Type Provider
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// Helmet
app.register(helmet)

// Swagger
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Myco Faucet',
      description: 'Myco Faucet',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

// Swagger UI
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

// CORS
app.register(cors)

// Routes
app.register(mint)

// Start server
app.listen({ port: PORT }).then(() => {
  console.log(`Server is running on port ${PORT}`)
})
