import fastifyCors from '@fastify/cors'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import studentRoutes from './routes/student.route'

//Instaciar o servidor
const server: FastifyInstance = fastify()

//Plugins
server.register(fastifyCors, {
  origin: '*', // Permite requisições do Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite DELETE
})

//rotas
server.get('/', (req: FastifyRequest, replay: FastifyReply) => {
  replay.status(200).send({ message: 'servidor ok' })
})

server.register(studentRoutes)

//configurações de porta
server.listen(
  {
    port: 3000,
  },
  () => {
    console.log('Server runnig port 3000')
  }
)
