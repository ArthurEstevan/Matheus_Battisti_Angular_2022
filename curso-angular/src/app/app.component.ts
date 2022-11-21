import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Criando um ArrayList com itens para passar para nosso componente filho
  welcome: string = "Bem vindo!";

  // Apenas estilição, pode não ser a melhor maneira de estilizar mais ajuda a lembrar das etapas
  class = [
    "title"
  ]

  // Criando um JSON com itens para passar para nosso componente filho
  userData = {
    email: "arthur@gmail.com",
    senha: "pegueiobobo"
  }

  title = 'curso-angular';
}
