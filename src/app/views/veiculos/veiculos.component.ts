import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { Veiculos } from './interface/veiculos';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})
export class VeiculosComponent implements OnInit {
  veiculoArray: Veiculos[] = [];
  pageIndex: number = 0;
  pageSize!: number;
  constructor(private veiculoService: VeiculosService) {}

  ngOnInit(): void {
    this.listarVeiculos(1);
  }

  listarVeiculos(numPaginas: number) {
    this.veiculoService.getVeiculos(numPaginas).subscribe(
      (veiculo) => {
        this.veiculoArray = veiculo.results;
        this.pageSize = veiculo.count;
      },
      (err) => alert('Deu ruim ' + err)
    );
  }
  proximaPagina(pe: PageEvent) {
    pe.pageIndex;
    this.listarVeiculos(pe.pageIndex + 1);
  }
}
