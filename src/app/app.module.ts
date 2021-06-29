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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { getPaginatorIntl } from 'src/assets/config/pagination';
import { PersonagemModalComponent } from './views/personagens/personagem-modal/personagem-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavesModalComponent } from './views/naves/naves-modal/naves-modal.component';
import { FilmesModalComponent } from './views/filmes/filmes-modal/filmes-modal.component';
import { VeiculosModalComponent } from './views/veiculos/veiculos-modal/veiculos-modal.component';
import { PlanetaModalComponent } from './views/planetas/planeta-modal/planeta-modal.component';

import { LoginModalComponent } from './views/login/modals/login-modal/login-modal.component';
import { LoginErroComponent } from './views/login/modals/login-erro/login-erro.component';


import { PersonagensService } from './shared/services/personagens.service';
import { DataPipe } from './shared/pipes/data.pipe';
import { CardComponent } from './shared/card/card.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ErroPageComponent } from './shared/erro-page/erro-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonagensComponent,
    FilmesComponent,
    NavesComponent,
    VeiculosComponent,
    PlanetasComponent,
    PersonagemModalComponent,
    NavesModalComponent,
    FilmesModalComponent,
    VeiculosModalComponent,
    PlanetaModalComponent,
    NavBarComponent,
    ErroPageComponent,
    LoginModalComponent,
    LoginErroComponent,
    DataPipe,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [
    AuthService,
    PersonagensService,
    HttpClient,
    HttpClientModule,
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
