import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  @Input() user:any;
  @Input() idx:any;
  @Output() evenement = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  present() {
    this.evenement.emit(this.user.nom + ' présent');
  }
}
