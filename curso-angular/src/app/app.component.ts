import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  welcome: string = "Bem vindo!";
  userData = {
    email: "arthur.estevan01@gmail.com",
    senha: "pegueioboconacascadoovo"
  }

  title = 'curso-angular';
}
