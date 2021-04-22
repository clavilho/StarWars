import { MatPaginator, PageEvent } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { Filme } from './interface/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmesArray: Filme[] = [];
  @ViewChild(MatPaginator)
  pageIndex: number = 1;

  constructor(private filmeService: FilmesService) {}

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
}
