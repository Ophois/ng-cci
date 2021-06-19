import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AgeserviceService } from '../ageservice.service';
import { ProverbeService } from '../proverbe.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit{
  profileForm!: any;
  proverbe!: string;
  ageEstime!: any;

  //injection des services nécessaires au fonctionnement du composant
  constructor(private fb: FormBuilder, private jcvd: ProverbeService, private ageSvc : AgeserviceService) {
    this.proverbe = jcvd.afficher();
   }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(77)]],
      // required: champs obligatoire
      // minLength(4): nombre de caractères mini
      // maxLength(10): nombre de caractères maxi
      // min(18): valeur minimale (age par exemple)
      // max(25): valeur maxi
      // email
      // pattern(): expression régulière
      lastName: ['', Validators.required]
    });
  }
  verifAge(prenom:string){
    console.log(prenom);
    this.ageSvc.getAge(prenom).subscribe((data:any) => {
      console.log(data)
      this.ageEstime = data.age;
    });
  }

  valider() {
    console.log(this.profileForm.value);
    console.log('nom: ' + this.profileForm.value.firstName);
    console.log('prenom: ' + this.profileForm.value.lastName);
  }

}
