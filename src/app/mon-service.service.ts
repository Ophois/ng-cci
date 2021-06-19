import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  private liste = [
		"Tout vient à point à qui sait attendre",
		"Rien ne sert de courir il faut partir à point",
		"Si vous ne réalisez pas vos rêves, quelqu'un vous embauchera pour réaliser les siens",
		"Dans la vie il y a 10 sortes de gens, ceux qui savent compter en binaire et les autres",
		"Il n'y a que les montagnes qui ne se rencontrent jamais",
		"Les voyages forment la jeunesse",
		"Les paroles s'envolent, les écrits restent",
		"J'ai plus d'imagination..."
	];
	afficher(){
		let val = Math.floor(Math.random() * this.liste.length);
		return this.liste[val];
	}

}
