import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { PersonagensService } from 'src/app/services/personagens.service';
import { Personagens } from './interface/personagens';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  personagensArray: Personagens[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  constructor(private personagemService: PersonagensService) {}

  ngOnInit(): void {
    this.listarPersonagens(1);
  }

  listarPersonagens(numeroPagin: number) {
    this.personagemService.getPersonagem(numeroPagin).subscribe(
      (personagem) => {
        this.personagensArray = personagem.results;
        this.pageSize = personagem.count;
      },
      (erro) => alert('Deu ruim ' + erro)
    );
  }

  proximaPagina(pe: PageEvent) {
    this.pageIndex = pe.pageIndex;

    console.log(pe);
    this.listarPersonagens(pe.pageIndex + 1);
  }
}
