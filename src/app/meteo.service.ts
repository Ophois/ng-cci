import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  //https://geo.api.gouv.fr/communes?nom=Nantes&fields=centre,departement
  url1 = 'https://geo.api.gouv.fr/communes';
  //https://api.openweathermap.org/data/2.5/onecall?lat=44.9208&lon=5.8272
  //&appid=d2e33b810d399f2fb3d6791d161388ec&exclude=hourly,minutely&units=metric&lang=fr
  //url2 = 'https://api.openweathermap.org/data/2.5/onecall';
  url2 =   'https://api.openweathermap.org/data/2.5/onecall?appid=d2e33b810d399f2fb3d6791d161388ec&exclude=hourly,minutely&units=metric&lang=fr';
  constructor(private http: HttpClient) { }

  //recherche de la liste des villes
  lycos(ville:any) {
    //console.log(ville);
    //fabrication des paramètres de l'url (?nom=Nantes&fields=centre)
    const params = new HttpParams().set('nom', ville).set('fields', 'centre,departement');
    //appel API + valeur de retour
    return this.http.get(this.url1, { params });
  }

  //recherche de la météo d'une ville (lat + lng)
  agp(ville:any) {
    console.log(ville);
    //récupération latitude et longitude
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.url2 + '&lat=' + lat + '&lon=' + lng);
  }

  users() {
    return this.http.get('http://localhost:3000/users');
  }

}
