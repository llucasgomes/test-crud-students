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

  update(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiURl}/${student.id}`, student)
  }
}
