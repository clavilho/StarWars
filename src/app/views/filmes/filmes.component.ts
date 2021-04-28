import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { Filme } from './interface/filmes';
import { MatDialog } from '@angular/material/dialog';
import { FilmesModalComponent } from './filmes-modal/filmes-modal.component';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmesArray: Filme[] = [];
  @ViewChild(MatPaginator)
  pageIndex: number = 1;

  constructor(
    private filmeService: FilmesService,
    public dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.listarFilmes(this.pageIndex);
  }

  listarFilmes(numeroPagin: number) {
    this.filmeService.getFilmes(numeroPagin).subscribe(
      (filme) => {
        this.filmesArray = filme.results;
      },
      (erro) => {
        alert('Deu ruim' + erro);
      }
    );
  }

  proximaPagina(pe: PageEvent) {
    pe.pageIndex++;
    this.listarFilmes(pe.pageIndex);
  }

  onClick(filme: any) {
    this.dialogRef.open(FilmesModalComponent, {
      height: '500px',
      width: '600px',
      data: filme,
    });
  }
}
