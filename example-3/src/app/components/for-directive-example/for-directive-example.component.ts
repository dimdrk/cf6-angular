import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Charles",
      "surName": "Gonzales",
      "email": "charlesscottgonzales@rocketmail.com",
      "age": 45,
      "address": "Lima"
    },
    {
      "givenName": "Isabella",
      "surName": "Walker",
      "email": "i.r.walker@hotmail.com",
      "age": 45,
      "address": "Weedville"
    },
    {
      "givenName": "Samantha",
      "surName": "Morris",
      "email": "samantha@outlook.com",
      "age": 57,
      "address": "Saline"
    },
    {
      "givenName": "Christopher",
      "surName": "Harris",
      "email": "christopher_harris83@hotmail.com",
      "age": 74,
      "address": "Utica"
    },
    {
      "givenName": "Kyle",
      "surName": "Long",
      "email": "k_j_long@hotmail.com",
      "age": 70,
      "address": "Charleston"
    },
    {
      "givenName": "Lauren",
      "surName": "Roberts",
      "email": "lauren@ymail.com",
      "age": 37,
      "address": "Bloomville"
    },
    {
      "givenName": "James",
      "surName": "Alexander",
      "email": "james.alexander@live.com",
      "age": 36,
      "address": "Arvada"
    },
    {
      "givenName": "Gabriel",
      "surName": "Diaz",
      "email": "gabriel.m.diaz@live.com",
      "age": 27,
      "address": "Mi Wuk Village"
    },
    {
      "givenName": "Timothy",
      "surName": "Brown",
      "email": "timothy_alan_brown@rocketmail.com",
      "age": 62,
      "address": "Wilson"
    },
    {
      "givenName": "Steven",
      "surName": "Perry",
      "email": "s_d_perry@live.com",
      "age": 69,
      "address": "Provo"
    }
  ]
}
