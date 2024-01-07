import fastify from 'fastify'

const startServer = () => {
  const server = fastify({
    logger: !!(process.env.NODE_ENV !== 'development'),
  })
  const PORT = Number(process.env.PORT) || 3006

  server.listen({ port: PORT })
  console.log(`🚀  Fastify server running on port http://localhost:${PORT}`)
}

startServer()
