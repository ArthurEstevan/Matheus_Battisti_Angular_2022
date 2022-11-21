import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  // Criando variável booleana
  canShow: boolean = true;
  
  // Criando variável string
  name: string = "Arthur Estevan"

  constructor() { }

  ngOnInit(): void {
  }

  showElse(): void {
    if(this.name == "Arthur Estevan") {
      this.name = "Arthur Estevan Vargas"
    } else if((this.name == "Arthur Estevan Vargas")) {
      this.name = "Arthur Estevan"
    }
  }

}
