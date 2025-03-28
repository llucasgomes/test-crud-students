import { Student } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createStudentModel,
  deleteStudentModel,
  getAllStudentModel,
  getStudentByEmailModel,
  getStudentByIdModel,
  updateStudentByIdModel,
} from '../model/student.model'

export const createStudentService = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const { course, email, name } = req.body as Student

    const studentExist = await getStudentByEmailModel(email)
    if (studentExist) {
      return res.status(400).send({ message: 'Estudante já cadastrado' })
    }

    const student = await createStudentModel({ name, course, email })
    return res.status(201).send(student)
  } catch (error) {
    console.log('Erro Interno no servidor', error)
    res.status(500).send({ message: 'Erro interno no servidor' })
  }
}

export const updateStudentService = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { id } = req.params as { id: string }
  const data = req.body as Student

  try {
    const studentExist = await getStudentByIdModel(id)
    if (!studentExist) {
      res
        .status(404)
        .send({ message: 'Não foi encontrado o Estudante no banco de dados' })
      return
    }
    const update = await updateStudentByIdModel(id, data)

    return res.status(200).send(update)
  } catch (error) {
    console.log('Erro Interno no servidor', error)
    res.status(500).send({ message: 'Erro interno no servidor' })
  }
}

export const getAllStudentService = async () => {
  return getAllStudentModel()
}

export const getStudentByIdService = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { id } = req.params as { id: string }

  try {
    const studentExist = await getStudentByIdModel(id)
    if (!studentExist) {
      res
        .status(404)
        .send({ message: 'Não foi encontrado o Estudante no banco de dados' })
      return
    }

    return res.status(200).send(studentExist)
  } catch (error) {
    console.log('Erro Interno no servidor', error)
    res.status(500).send({ message: 'Erro interno no servidor' })
  }
}

export const deleteStudentByIdService = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { id } = req.params as { id: string }
  try {
    const studentExist = await getStudentByIdModel(id)
    if (!studentExist) {
      res
        .status(404)
        .send({ message: 'Não foi encontrado o Estudante no banco de dados' })
      return
    }
    await deleteStudentModel(id)
    return res.status(200).send({ message: 'Estudante deletadocom sucesso' })
  } catch (error) {
    console.log('Erro Interno no servidor', error)
    res.status(500).send({ message: 'Erro interno no servidor' })
  }
}
