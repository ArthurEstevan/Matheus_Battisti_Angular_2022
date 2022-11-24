import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  // Usando a declaração @Input() conseguimos capturar dados passado pelo nosso componente pai
  // Precisamos importar ela nos imports la encima então podemos usar

  // Welcome inicalizamos como uma string vazia, porque ele é uma string no componente pai
  @Input() welcome: string = '';
  
  // UserData é um pouco diferente, inicializamos ele falando que pode não conter dados
  // por isso escrevemos userData!:
  // depois para mais certeza de receber esses dados correto
  // passamos parametros e o tipo dos parametros
  @Input() userData!: {email: string, senha: string};

  constructor() { }

  ngOnInit(): void {
  }

}
