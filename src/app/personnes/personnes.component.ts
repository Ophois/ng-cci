import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  personnes = [
    {nom: 'TAVERNIER', prenom: 'Bruno', age: '25', ville:'Montpellier'},
    {nom: 'MARCEL', prenom: 'Benhur', age: '2061', ville:'Jérusalem'},
    {nom: 'Mc Lane', prenom: 'John', age: '40', ville: 'N-Y'},
    {nom: 'DUCE', prenom: 'JC', age: '25', ville: 'darlaswinga'},
    {nom: 'TUCHE', prenom: 'Jeff', age: '40', ville: 'Bouzolles'},
    {nom: 'MAURICE', prenom: 'Chuck', age: '55', ville: 'Lille'},
    {nom: 'VD', prenom: 'JC', age: '61', ville: 'Bruxelles'}
  ];

  appel(evt:string) {
    alert(evt);
  }
}
