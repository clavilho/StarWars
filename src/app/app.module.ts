import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './views/login/auth.service';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { PersonagensComponent } from './views/personagens/personagens.component';
import { FilmesComponent } from './views/filmes/filmes.component';
import { NavesComponent } from './views/naves/naves.component';
import { VeiculosComponent } from './views/veiculos/veiculos.component';
import { PlanetasComponent } from './views/planetas/planetas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, PersonagensComponent, FilmesComponent, NavesComponent, VeiculosComponent, PlanetasComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
