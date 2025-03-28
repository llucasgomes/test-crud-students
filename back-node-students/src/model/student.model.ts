import { Student } from "@prisma/client"
import { prisma } from "../lib/prisma-client"


export const getAllStudent =async ()=>{
  return await prisma.student.findMany()
}

export const getStudentById = async(id:string)=>{
  return await prisma.student.findUnique(
    {
      where:{id}
    }
  )
}

export const createStudent = async(student:Student)=>{
  return await prisma.student.create({
    data:{
      ...student
    }
  })
}

export const deleteStudent = async (id:string)=>{
  return await prisma.student.delete({
    where:{id}
  })
}

export const updateStudentById =async (id:string,student:Student)=>{
  return prisma.student.update({
    where:{id},
    data:{
      ...student
    }
  })
} 