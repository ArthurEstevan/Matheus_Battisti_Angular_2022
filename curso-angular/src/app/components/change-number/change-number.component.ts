import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Input() welcome: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.changeNumber.emit();
  }
}
