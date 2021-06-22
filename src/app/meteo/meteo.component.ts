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

  /**
  * Constructeur. Injection du service FormBuilder pour gérer le formulaire
  * @param FormBuilder fb Service FormBuilder pour les formulaires
  * @param MeteoService meteoSvc Service de recherche de coordonnées GPS et de météo
  */
  constructor(private fb: FormBuilder, private meteoSvc: MeteoService) { }

  /**
   * Création du formulaire + validation du champs.
   */
  ngOnInit(): void {
    this.monForm = this.fb.group({
      //champs obligatoire + minimum 2 caractères
      ville: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  /**
   * Fonction de recherche de la liste des villes en fonction du formulaire.
   */
  recherche() {
    //console.log(this.monForm.value.ville);
    //appel du service meteo pour récupérer la liste des villes correspondant
    this.meteoSvc.lycos(this.monForm.value.ville).subscribe((data:any) => {
      //console.log(data);
      this.resultat = data;
    });

    // appel de la méthode users du service pour récupérer les
    // enregistrements dans json-server
    this.meteoSvc.users().subscribe((truc) => {
      console.log(truc)
    });
  }

  /**
   * Fonction de sélection d'une ville (+ recherche météo).
   * @param any nomville objet ville pour affichage de la météo.
   */
  selection(nomVille:any) {
    //console.log(nomVille);
    this.meteoSvc.agp(nomVille).subscribe((retour:any) => {
      //console.log(retour);
      this.myMeteo = retour;
    });
  }
}
// https://github.com/Ophois/ng-cci.git
