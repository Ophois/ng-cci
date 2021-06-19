import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'projet1';
  maVariable = "Youpee, j'apprends Angular 12";
  maCondition = true;
 name: string = "test";
  /* faire en sorte que la condition change quand on clique sur le bouton */
  maFonction(){
    this.maCondition = !this.maCondition;
    this.imgsrc = "https://blog.monvinfrancais.com/media/Beaujolais-Nouveau.jpg";
    this.imgalt = "vive le beaujolais nouveau";
    //alert('ok');
  }
  semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  personne = [
    {nom: 'TAVERNIER', prenom: 'Bruno'},
    {nom: 'MARCEL', prenom: 'Benhur'},
    {nom: 'Mc Lane', prenom: 'John'},
    {nom: 'DUCE', prenom: 'JC'}
  ];
  imgsrc="https://jecreedansmaregion.fr/sites/default/files/styles/news/public/cci-beaujolais.png";
  imgalt="ma super image";

  maDate = new Date();
  monNom = "Bond";
  montant = 45.564631;


}
