import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FilmesModalComponent } from './filmes-modal/filmes-modal.component';
import { Router } from '@angular/router';
import { FilmesService } from 'src/app/shared/services/filmes.service';
import { Filme } from 'src/app/shared/interface/filmes';
@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmesArray: Filme[] = [];
  @ViewChild(MatPaginator)
  pageIndex: number = 1;
  imagem: string = '../../../assets/movie.svg';
  titulo: string = 'Filmes';

  constructor(
    private filmeService: FilmesService,
    public dialogRef: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarFilmes();
  }

  listarFilmes() {
    this.filmeService.getFilmes().subscribe(
      (filme) => {
        this.filmesArray = filme.results;
      },
      (err) => {
        this.router.navigate(['/erro']);
        console.log('O erro é o seguinte: ', err);
      }
    );
  }

  proximaPagina(pe: PageEvent) {
    pe.pageIndex++;
    this.listarFilmes();
  }

  onClick(filme: any) {
    this.dialogRef.open(FilmesModalComponent, {
      height: '600px',
      width: '500px',
      data: filme,
    });
  }
}
