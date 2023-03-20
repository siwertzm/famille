import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {component: ConnexionComponent, path: 'connexion'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {component: InscriptionComponent, path: 'inscription'},
  {component: ProfilComponent, path: 'profil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
