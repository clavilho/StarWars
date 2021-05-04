import { PersonagemModalComponent } from './personagem-modal/personagem-modal.component';
import { Component, OnInit, Output } from '@angular/core';

import { PersonagensService } from 'src/app/services/personagens.service';
import { Personagens } from './interface/personagens';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  public personagensArray: Personagens[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  constructor(
    private personagemService: PersonagensService,
    public dialog: MatDialog
  ) { }

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
    console.log(this.personagensArray.values);
    this.listarPersonagens(pe.pageIndex + 1);
  }

  openDialog(pessoa: any) {
    this.dialog.open(PersonagemModalComponent, {
      width: '500px',
      height: '390px',
      data: pessoa


    });
  }
}
