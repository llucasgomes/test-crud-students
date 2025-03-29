import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Student } from './../@types/index'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURl = 'http://localhost:3000/student'

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiURl)
  }

  deleteStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${this.apiURl}/${student.id}`)
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiURl, student)
  }
  // updateStudent(student: Student): Observable<Student> {
  //   const { email, name, course } = student
  //   return this.http.get<Student>(`${this.apiURl}/${student.id}`, {
  //     email,
  //     name,
  //     course
  //   })
  // }
}
