import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() title: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  back() {
    this.btnClick.emit();
  }
}
