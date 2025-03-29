import { CommonModule } from '@angular/common'
import {
  AfterViewInit,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Student } from '../../@types'
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component'

// Dados de exemplo
// const students: IStudent[] = [
//   {
//     id: '1',
//     name: 'João Silva',
//     email: 'joao.silva@exemplo.com',
//     course: 'Engenharia de Software',
//     enrollmentDate: '2023-02-15'
//   },
//   {
//     id: '2',
//     name: 'Maria Santos',
//     email: 'maria.santos@exemplo.com',
//     course: 'Ciência da Computação',
//     enrollmentDate: '2023-01-10'
//   },
//   {
//     id: '3',
//     name: 'Pedro Oliveira',
//     email: 'pedro.oliveira@exemplo.com',
//     course: 'Sistemas de Informação',
//     enrollmentDate: '2023-03-05'
//   },
//   {
//     id: '4',
//     name: 'Ana Costa',
//     email: 'ana.costa@exemplo.com',
//     course: 'Análise de Dados',
//     enrollmentDate: '2023-02-20'
//   },
//   {
//     id: '5',
//     name: 'Lucas Pereira',
//     email: 'lucas.pereira@exemplo.com',
//     course: 'Inteligência Artificial',
//     enrollmentDate: '2023-01-25'
//   }
// ]

@Component({
  selector: 'app-table-students',
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, CommonModule],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css'
})
export class TableStudentsComponent implements AfterViewInit, OnChanges {
  @Input() data!: Student[]
  @Output() deleteStudent = new EventEmitter<Student>()
  @Output() updateStudent = new EventEmitter<Student>()

  readonly dialog = inject(MatDialog) // Injeção do MatDialog

  displayedColumns: string[] = [
    // 'id',
    'name',
    'email',
    'course',
    // 'enrollmentDate',
    'actions'
  ]
  dataSource = new MatTableDataSource<Student>()

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  ngOnChanges(): void {
    if (this.data) {
      this.dataSource.data = this.data
    }
  }

  // Método para formatar a data de matrícula
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', options)
    return formattedDate
  }

  // Métodos para os botões
  onEdit(student: Student): void {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      data: student // Passa os dados do aluno para o dialog
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateStudent.emit(result)
      }
    })
  }

  onDelete(student: Student): void {
    this.deleteStudent.emit(student)
  }
}
