import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // Visto que na ultima aula aprendemos como criar uma lista
  // aqui apenas tranasformamos ela de acordo com nossa interface
  // deixando o código mais limpo e facil de entender
  animals: Animal[] = [
    {name: "Tigre", type: "Predador", age: 1},
    {name: "Passáro", type: "Voador", age: 2},
    {name: "Capivara", type: "Roedor", age: 3},
  ]
  animalDetails!: number;

  constructor() { }

  ngOnInit(): void {
  }

  // apenas criando uma função para mostrar idade que foi implementada nova
  showAge(param: Animal): void {
    this.animalDetails = param.age;
  }
}
