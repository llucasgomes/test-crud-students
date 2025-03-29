import { Component, Inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Student } from '../../@types'

@Component({
  selector: 'app-dialog-update',
  imports: [FormsModule],
  templateUrl: './dialog-update.component.html',
  styleUrl: './dialog-update.component.css'
})
export class DialogUpdateComponent {
  // Variáveis que armazenam os dados dos alunos
  name: string
  email: string
  course: string

  constructor(
    private dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student // Recebe o aluno atual como dados
  ) {
    // Inicializa as variáveis com os dados passados
    this.name = this.data.name
    this.email = this.data.email
    this.course = this.data.course
  }

  // Método para atualizar o estudante
  atualizar(): void {
    if (!this.name || !this.email || !this.course) {
      alert('Preencha todos os dados corretamente')
      return
    }

    const updatedStudent: Student = {
      id: this.data.id,
      name: this.name,
      email: this.email,
      course: this.course
    }

    // Envia os dados atualizados e fecha o diálogo
    this.dialogRef.close(updatedStudent)
  }

  // Método para cancelar (fechar sem passar valor)
  cancelDialog(): void {
    this.dialogRef.close() // Fecha o diálogo sem retornar valor
  }
}
