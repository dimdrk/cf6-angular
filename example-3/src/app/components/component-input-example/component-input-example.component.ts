import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: "name1",
    surName: "surname1",
    age: 25,
    email: "abc@aueb.gr",
    address: "Athens"
  }
  
  person1: Person = {
    givenName: "name2",
    surName: "surname2",
    age: 25,
    email: "def@aueb.gr",
    address: "Athens"
  }
}
