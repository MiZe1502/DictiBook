const handler = async (req, reply) => {
    return 'test'
}

module.exports = function (fastify, opts, next) {
    fastify.get('/', handler)
    next()
}