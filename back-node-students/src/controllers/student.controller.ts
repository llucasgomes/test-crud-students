import { FastifyInstance } from 'fastify'
import {
  createStudentService,
  deleteStudentByIdService,
  getAllStudentService,
  getStudentByIdService,
  updateStudentService,
} from '../services/student.service'

export default async function studentController(server: FastifyInstance) {
  server.post('/', createStudentService),
    server.get('/', getAllStudentService),
    server.get('/:id', getStudentByIdService),
    server.put('/:id', updateStudentService),
    server.delete('/:id', deleteStudentByIdService)
}
