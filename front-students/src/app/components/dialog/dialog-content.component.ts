import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

// Definindo a interface dos dados do diálogo
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-content',  // Nome do seletor para o componente
  imports:[FormsModule,MatFormFieldModule],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class DialogContentComponent {
  inputValue: string = '';  // Variável para armazenar o valor do input

  constructor(private dialogRef: MatDialogRef<DialogContentComponent>) {}

  // Método para fechar o diálogo e passar o valor do input
  closeDialog(): void {
    this.dialogRef.close(this.inputValue);  // Fecha o diálogo e retorna o valor do input
  }

  // Método para cancelar (fechar sem passar valor)
  cancelDialog(): void {
    this.dialogRef.close();  // Fecha o diálogo sem retornar valor
  }
}
