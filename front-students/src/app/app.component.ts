import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Student } from './@types'
import { ButtonComponent } from './components/button/button.component'
import { TableStudentsComponent } from './components/table-students/table-students.component'
import { StudentService } from './service/student.service'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonComponent,
    TableStudentsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front-students'

  STUDENTS: Student[] = []

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.STUDENTS = data
      console.log(data)
    })
  }
}
