import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { Veiculos } from './interface/veiculos';
import { VeiculosModalComponent } from './veiculos-modal/veiculos-modal.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})
export class VeiculosComponent implements OnInit {
  veiculoArray: Veiculos[] = [];
  pageIndex: number = 0;
  pageSize!: number;
  constructor(
    private veiculoService: VeiculosService,
    private dialogRef: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarVeiculos(1);
  }

  listarVeiculos(numPaginas: number) {
    this.veiculoService.getVeiculos(numPaginas).subscribe(
      (veiculo) => {
        this.veiculoArray = veiculo.results;
        this.pageSize = veiculo.count;
      },
      (err) => {
        this.router.navigate(['/erro'])
        alert('Deu ruim ' + err)
      }
    );
  }
  proximaPagina(pe: PageEvent) {
    pe.pageIndex;
    this.listarVeiculos(pe.pageIndex + 1);
  }

  onClick(veiculo: any) {
    this.dialogRef.open(VeiculosModalComponent, {
      width: '500px',
      height: '430px',
      data: veiculo,
    });
  }
}
