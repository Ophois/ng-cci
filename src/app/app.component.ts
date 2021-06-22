import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
//import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Webpack-bundle-analyzer permet de choisir entre deux bibliothèques
// laquelle est la plus "light" pour in projet.
// pour rechercher une bibliothèque: https://npms.io/search
export class AppComponent {
  //public date = moment().format('DD/MM/YYYY');
  public date2 = dayjs().format('DD/MM/YYYY');
}
