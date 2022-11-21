import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  // Passando valor em formato number
  size: number = 40

  // Passando valor em formato string
  font: string = 'Arial'
  color: string = "coral"

  // Passando valor em formato ArrayList
  // Além de esses valores serem classes do meu arquivo css para a diretiva [ngClass] consumir
  classes = [
    'coral-title'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
