import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from './views/erro-page/erro-page.component';

import { FilmesComponent } from './views/filmes/filmes.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NavesComponent } from './views/naves/naves.component';
import { PersonagensComponent } from './views/personagens/personagens.component';
import { PlanetasComponent } from './views/planetas/planetas.component';
import { VeiculosComponent } from './views/veiculos/veiculos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'erro', component: ErroPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
