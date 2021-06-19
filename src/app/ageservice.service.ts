import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeserviceService {
  url = 'https://api.agify.io/';

  // le service va se connecter à une API.
  //Il dépends du service HttpClient
  constructor(private http: HttpClient) { }

  getAge(prenom: string): any {
    // pour éviter la concaténation https://api.agify.io/?age=Alfred&country_if=FR
    const params = new HttpParams().set('name', prenom).set('country_id', 'FR');
    if(prenom) {
      return this.http.get(this.url, { params });
    }
  }
}
//ne pas oublier d'ajouter HttpClientModule dans app.module.ts
//il faut peut-être faire l'import de HttpClientModule depuis @angular/common/http à la main
