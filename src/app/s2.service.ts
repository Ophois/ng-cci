import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S2Service {
  url = 'https://api.agify.io/';

  constructor(private http: HttpClient) { }

  getAge(prenom:string):any{
    const params = new HttpParams().set('name', prenom).set('country_id', 'FR');
    if(prenom)
    {
      return this.http.get(this.url, { params });
    }
  }
}
//ne pas oublier d'ajouter httpclientmodule dans app.module.ts
