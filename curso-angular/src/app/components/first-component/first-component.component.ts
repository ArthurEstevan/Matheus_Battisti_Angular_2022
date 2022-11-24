import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  // Podemos ter dados em forma de String;
  name: string = "Arthur Estevan Vargas";

  // Podemos ter dados em forma de number;
  age: number = 19;

  // Nesse caso pelo uso das "" o Typescript entende que é uma String;
  job = "Developer";

  // Podemos ter dados iniciados em uma ArrayList;
  hobbies = ["Correr", "Jogar", "Estudar"]

  // Podemos também usar dados de um JSON;
  car = {
    model: "Bugatti",
    year: 2022,
    color: "Black"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
