import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() welcome: string = '';
  @Input() userData!: {email: string, senha: string};

  constructor() { }

  ngOnInit(): void {
  }

}
