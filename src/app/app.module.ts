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
import { PersonagensService } from './services/personagens.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { getPaginatorIntl } from 'src/assets/config/pagination';
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
export class AppModule {}
