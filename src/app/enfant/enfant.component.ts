import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  @Input() parametre: string = 'Luke';
  @Output() evenement = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  btnClick() {
    this.evenement.emit('DG - mon vieux!');
   }

}
