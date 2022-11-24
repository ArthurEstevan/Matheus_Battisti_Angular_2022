import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  // Declaramos @Output() com um nome do parametro e definimos ele
  // sendo um EventeEmitter< tipo any> 
  // logo em seguida inicamos eles como sendo da classe EventEmitter
  // assim conseguimos usar seus atributos 
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Input() welcome: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    // aqui estou emitindo para fora minha meu dados que está no 
    // componente filho assim o pai pode usalos para implementar a lógica
    this.changeNumber.emit();
  }
}
