import { FastifyInstance } from 'fastify'
import studentController from '../controllers/student.controller'

export default async function studentRoutes(server: FastifyInstance) {
  server.register(studentController, { prefix: '/students' })
}
