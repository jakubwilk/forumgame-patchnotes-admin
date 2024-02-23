import Fastify from 'fastify'

const fastify = Fastify({
  logger: !!(process.env.NODE_ENV !== 'development'),
})
const PORT = Number(process.env.PORT) || 3006

const initializeRoutes = () => {
  fastify.get('/', async () => {
    return { hello: 'world' }
  })
}

const start = async () => {
  try {
    initializeRoutes()
    await fastify.listen({ port: PORT })
    console.log(`🚀  Fastify server running on port http://localhost:${PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
