import { Planetas } from './../../planetas/interface/planetas';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonagensService } from 'src/app/views/shared/services/personagens.service';
import { PlanetasService } from 'src/app/views/shared/services/planetas.service';
import { Personagens } from '../../personagens/interface/personagens';
import { FilmesComponent } from '../filmes.component';

@Component({
  selector: 'app-filmes-modal',
  templateUrl: './filmes-modal.component.html',
  styleUrls: ['./filmes-modal.component.css'],
})
export class FilmesModalComponent implements OnInit {
  personagemFilme: Personagens[] = [];
  persons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
  planetaFilme: Planetas[] = []
  filmes: number = 1
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FilmesComponent>,
    private personagemService: PersonagensService,
    private planetaService: PlanetasService
  ) { }

  ngOnInit(): void {
    this.personagensFilme()
    this.planetaFilms()
    console.log(this.filmes)
  }

  planetaFilms() {
    this.data.planets.forEach((url: string) => {
      console.log(url)
      this.planetaService.getPlanetaByUrl(url).subscribe(
        (planeta) => {
          this.planetaFilme.push(planeta)
        }
      )
    })
  }
  personagensFilme() {
    this.data.characters.forEach((url: string) => {
      this.personagemService.getPersonagemByUrl(url).subscribe(
        (personagem) => {
          this.personagemFilme.push(personagem)
        }
      )

    });
  }


  onNoClick() {
    this.dialogRef.close();
  }
}
