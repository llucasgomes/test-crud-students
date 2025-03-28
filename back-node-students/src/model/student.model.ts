import { Student } from "@prisma/client"
import { prisma } from "../lib/prisma-client"


export const getAllStudentModel =async ()=>{
  return await prisma.student.findMany()
}

export const getStudentByIdModel = async(id:string)=>{
  return await prisma.student.findUnique(
    {
      where:{id}
    }
  )
}
export const getStudentByEmailModel = async(email:string)=>{
  return await prisma.student.findUnique(
    {
      where:{email}
    }
  )
}

export const createStudentModel = async(student:Student)=>{
  return await prisma.student.create({
    data:{
      ...student
    }
  })
}

export const deleteStudentModel = async (id:string)=>{
  return await prisma.student.delete({
    where:{id}
  })
}

export const updateStudentByIdModel =async (id:string,student:Student)=>{
  return prisma.student.update({
    where:{id},
    data:{
      ...student
    }
  })
} 