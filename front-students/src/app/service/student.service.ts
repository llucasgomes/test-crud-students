import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Student } from './../@types/index'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURl = 'http://localhost:3000/students'

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiURl)
  }

  deleteStudent(student: Student): Observable<HttpResponse<Student>> {
    return this.http.delete<Student>(`${this.apiURl}/${student.id}`, {
      observe: 'response'
    })
  }

  createStudent(student: Student): Observable<HttpResponse<Student>> {
    return this.http.post<Student>(this.apiURl, student, {
      observe: 'response'
    })
  }

  update(student: Student): Observable<HttpResponse<Student>> {
    return this.http.put<Student>(`${this.apiURl}/${student.id}`, student, {
      observe: 'response'
    })
  }
}
