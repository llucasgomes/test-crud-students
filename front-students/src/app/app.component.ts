import { CommonModule } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { Component, inject, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { RouterOutlet } from '@angular/router'
import { NgToastModule, NgToastService } from 'ng-angular-popup'
import { Student, ToasterPosition } from './@types'
import { ButtonComponent } from './components/button/button.component'
import { TableStudentsComponent } from './components/table-students/table-students.component'
import { StudentService } from './service/student.service'

@Component({
  selector: 'app-root',
  standalone: true, // Adicione esta linha
  imports: [
    RouterOutlet,
    ButtonComponent,
    TableStudentsComponent,
    CommonModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly dialog = inject(MatDialog) // Injeção do MatDialog
  title = 'front-students'

  STUDENTS: Student[] = []

  // Expondo a enumeração para o template
  public ToasterPosition = ToasterPosition

  constructor(
    private studentService: StudentService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.STUDENTS = data
    })
  }

  addNewStudent(student: Student): void {
    this.studentService.createStudent(student).subscribe({
      next: (response) => {
        if (response.status == 201) {
          this.toast.success('Aluno adicionado com sucesso', 'Sucesso', 3000)

          this.studentService
            .getAllStudents()
            .subscribe((data) => (this.STUDENTS = data))
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 400) {
          alert(`**Error**\nAluno já existe com este Email`)
        } else if (err.status === 500) {
          alert(`**Error**\nErro no servidor. Tente novamente mais tarde`)
        } else {
          alert(`**Error**\nErro desconhecido: ${err.message}`)
        }
      }
    })
  }

  updateStudent(student: Student): void {
    this.studentService.update(student).subscribe({
      next: (res) => {
        if (res.ok) {
          this.studentService.getAllStudents().subscribe((data) => {
            this.toast.success('Aluno atualizado com sucesso', 'Sucesso', 3000)
            this.STUDENTS = data
          })
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          alert(`**Error**\nNão foi encontrado o Estudante no banco de dados`)
        } else if (err.status === 500) {
          alert(`**Error**\nErro no servidor. Tente novamente mais tarde`)
        } else {
          alert(`**Error**\nErro desconhecido: ${err.message}`)
        }
      }
    })
  }

  deleteStudent(student: Student): void {
    this.studentService.deleteStudent(student).subscribe({
      next: (res) => {
        if (res.ok) {
          this.studentService.getAllStudents().subscribe((data) => {
            this.toast.success('Aluno deletado com sucesso', 'Sucesso', 3000)
            this.STUDENTS = data
          })
        }
      },
      error(err: HttpErrorResponse) {
        if (err.status == 404) {
          alert(`**Error**\nNão foi encontrado o Estudante no banco de dados`)
        } else if (err.status === 500) {
          alert(`**Error**\nErro no servidor. Tente novamente mais tarde`)
        } else {
          alert(`**Error**\nErro desconhecido: ${err.message}`)
        }
      }
    })
  }

  // addNewStudent(student: Student): void {
  //   this.studentService.createStudent(student).subscribe(() => {
  //     this.studentService.getAllStudents().subscribe((data) => {
  //       this.toast.success('Aluno Adicionado com sucesso', 'Sucesso', 3000)
  //       this.STUDENTS = data
  //     })
  //   })
  // }
}
