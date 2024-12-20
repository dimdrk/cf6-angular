import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'example-1';


  person = {
    givenName: "Dimitris",
    surName: "Drakopoulos",
    age: 36,
    email: "dimdrk@aueb.gr"
  }
}
