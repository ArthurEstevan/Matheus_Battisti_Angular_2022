import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;
  welcome: String = "Bem vindo!"

  constructor() { }

  ngOnInit(): void {
  }

  // Lógica que faz minha mistura de números
  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10);
  } 
}
