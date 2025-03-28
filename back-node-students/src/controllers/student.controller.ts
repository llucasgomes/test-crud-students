import { FastifyInstance } from 'fastify'
import {
  createStudentService,
  deleteStudentByIdService,
  getAllStudentService,
  updateStudentService,
} from '../services/student.service'

export default async function studentController(server: FastifyInstance) {
  server.post('/', createStudentService),
    server.get('/', getAllStudentService),
    server.put('/:id', updateStudentService),
    server.delete('/:id', deleteStudentByIdService)
}
