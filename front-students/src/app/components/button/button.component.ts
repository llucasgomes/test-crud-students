import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { DialogContentComponent } from '../dialog/dialog-content.component'

@Component({
  selector: 'app-new-student-dialog-opener',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  readonly dialog = inject(MatDialog) // Injeção do MatDialog

  // Método para abrir o diálogo
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent) // Abre o componente DialogContentComponent

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Resultado do diálogo:', result) // Exibe o valor após o fechamento do diálogo
    })
  }
}
