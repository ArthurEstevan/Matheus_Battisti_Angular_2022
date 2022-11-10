import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Arthur Estevan Vargas";
  age: number = 19;
  job = "Developer";
  hobbies = ["Correr", "Jogar", "Estudar"]
  car = {
    model: "Bugatti",
    year: 2022,
    color: "Black"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
