const fastify = require('fastify')({
    logger: true
})

const appPort = 3000

fastify.register(require('./routes/testRoute'), { prefix: '/test' })

const start = async () => {
    try {
        await fastify.listen(appPort)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()