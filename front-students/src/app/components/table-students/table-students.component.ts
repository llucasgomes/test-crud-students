import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// Definição do tipo Student
export interface IStudent {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
}

// Dados de exemplo
const students: IStudent[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    course: 'Engenharia de Software',
    enrollmentDate: '2023-02-15',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@exemplo.com',
    course: 'Ciência da Computação',
    enrollmentDate: '2023-01-10',
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@exemplo.com',
    course: 'Sistemas de Informação',
    enrollmentDate: '2023-03-05',
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa@exemplo.com',
    course: 'Análise de Dados',
    enrollmentDate: '2023-02-20',
  },
  {
    id: '5',
    name: 'Lucas Pereira',
    email: 'lucas.pereira@exemplo.com',
    course: 'Inteligência Artificial',
    enrollmentDate: '2023-01-25',
  },
];


@Component({
  selector: 'app-table-students',
  imports: [MatTableModule,MatButtonModule,MatPaginatorModule],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css'
})

export class TableStudentsComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'course','enrollmentDate', 'actions'];
  dataSource = new MatTableDataSource<IStudent> (students);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 

  // Método para formatar a data de matrícula
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
    return formattedDate;
  }

  // Métodos para os botões
  onEdit(student: IStudent): void {
    console.log('Edit:', student);
  }

  onDelete(student: IStudent): void {
    console.log('Delete:', student);
  }

}
