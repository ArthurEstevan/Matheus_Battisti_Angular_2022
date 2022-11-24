import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  // Inicializando uma variavel booleana
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  // Essa lógica fara mostrar ou esconder uma mensagem;
  showMessage(): void {

    // Ao invés de fazermos um if e um else podemos utilizar esse método
    // Toda vez que chamar essa função this.show será diferente do seu valor atual
    // ou seja this.show = true se eu clicar será this.show = false
    this.show = !this.show
  }
}


