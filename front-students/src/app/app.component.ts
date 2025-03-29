import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
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
  readonly dialog = inject(MatDialog) // Injeção do MatDialog
  title = 'front-students'

  STUDENTS: Student[] = []

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.STUDENTS = data
      console.log(data)
    })
  }

  deleteStudent(student: Student): void {
    this.studentService
      .deleteStudent(student)
      .subscribe(() =>
        this.studentService
          .getAllStudents()
          .subscribe((data) => (this.STUDENTS = data))
      )
  }

  addNewStudent(student: Student): void {
    this.studentService
      .createStudent(student)
      .subscribe(() =>
        this.studentService
          .getAllStudents()
          .subscribe((data) => (this.STUDENTS = data))
      )
  }
}
