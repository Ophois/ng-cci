import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo: 'C1', pathMatch: 'full'},
  {path: 'C1', component: C1Component},
  {path: 'C2', component: C2Component},
  {path: 'C3/:id', component: C3Component},
  {path: 'discussion', component: ParentComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'meteo', component: MeteoComponent}
  /* possibilité de mettre un path ** pour l'équivalent de l'erreur 404  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
