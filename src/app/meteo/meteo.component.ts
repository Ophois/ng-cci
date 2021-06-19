import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  monForm!: any;
  resultat!:any;
  myMeteo!:any;

  // constructeur. Injection du service FormBuilder pour gérer le formulaire
  constructor(private fb: FormBuilder, private meteoSvc: MeteoService) { }

  // création du formulaire + validation du champs
  ngOnInit(): void {
    this.monForm = this.fb.group({
      //champs obligatoire + minimum 2 caractères
      ville: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //fonction de recherche de la liste des villes en fonction du formulaire
  recherche() {
    //console.log(this.monForm.value.ville);
    //appel du service meteo pour récupérer la liste des villes correspondant
    this.meteoSvc.lycos(this.monForm.value.ville).subscribe((data:any) => {
      //console.log(data);
      this.resultat = data;
    });
  }

  //fonction de sélection d'une ville (+ recherche météo)
  selection(nomVille:any) {
    //console.log(nomVille);
    this.meteoSvc.agp(nomVille).subscribe((retour:any) => {
      //console.log(retour);
      this.myMeteo = retour;
    });
  }

}
