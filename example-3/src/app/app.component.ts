import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-3';

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
