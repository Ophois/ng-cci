import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  @Input() parametre: string = 'Luke';
  @Output() evenement = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  btnClick() {
    this.evenement.emit('DG - mon vieux');
  }

}
