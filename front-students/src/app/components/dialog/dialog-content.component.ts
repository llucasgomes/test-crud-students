import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Student } from '../../@types'

// Definindo a interface dos dados do diálogo
export interface DialogData {
  animal: string
  name: string
}

@Component({
  selector: 'app-dialog-content', // Nome do seletor para o componente
  imports: [FormsModule, MatFormFieldModule],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class DialogContentComponent {
  @Output() addStudent = new EventEmitter<Student>()

  name: string = ''
  email: string = ''
  course: string = ''

  constructor(private dialogRef: MatDialogRef<DialogContentComponent>) {}

  // Método para fechar o diálogo e passar o valor do input
  salvar(): void {
    if (!this.name || !this.course || !this.email) {
      alert('Preencha todos os dados')
      return
    }

    const newStudent = {
      name: this.name,
      email: this.email,
      course: this.course
    }

    // this.addStudent.emit(newStudent)
    this.dialogRef.close(newStudent)
  }

  // Método para cancelar (fechar sem passar valor)
  cancelDialog(): void {
    this.dialogRef.close() // Fecha o diálogo sem retornar valor
  }
}
