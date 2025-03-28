import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Student } from '../@types'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURl = 'http://localhost:3000/student'

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiURl)
  }
}
