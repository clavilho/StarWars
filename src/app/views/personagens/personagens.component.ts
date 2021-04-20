import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/services/personagens.service';
import { Personagens } from './interface/personagens';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  personagensArray: Personagens[] = [];

  constructor(private personagemService: PersonagensService) {}

  ngOnInit(): void {
    this.listarPersonagens();
  }

  listarPersonagens() {
    this.personagemService.getPersonagem(3).subscribe(
      (personagem) => {
        this.personagensArray = personagem.results;
        console.log(this.personagensArray);
      },
      (erro) => console.log('Deu ruim ' + erro)
    );

  }
}
