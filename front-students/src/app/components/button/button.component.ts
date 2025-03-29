import { Component, EventEmitter, inject, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { Student } from '../../@types'
import { DialogContentComponent } from '../dialog/dialog-content.component'

@Component({
  selector: 'app-new-student-dialog-opener',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() studentAdded = new EventEmitter<Student>()
  readonly dialog = inject(MatDialog) // Injeção do MatDialog

  // Método para abrir o diálogo
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent) // Abre o componente DialogContentComponent

    dialogRef.afterClosed().subscribe((result) => {
      result && this.studentAdded.emit(result)
    })
  }
}
