import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { TableStudentsComponent } from "./components/table-students/table-students.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, TableStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-students';
}
