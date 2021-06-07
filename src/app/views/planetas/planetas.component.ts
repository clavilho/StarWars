import { PlanetaModalComponent } from './planeta-modal/planeta-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PlanetasService } from '../shared/services/planetas.service';
import { Component, OnInit } from '@angular/core';
import { Planetas } from '../shared/interface/planetas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
})
export class PlanetasComponent implements OnInit {
  planetasArray: Planetas[] = [];
  pageIndex: number = 0;
  pageSize!: number;
  constructor(
    private planetasService: PlanetasService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarPlanetas(1);
  }

  listarPlanetas(numPaginas: number) {
    this.planetasService.getPlanetas(numPaginas).subscribe(
      (planeta) => {
        this.planetasArray = planeta.results;
        this.pageSize = planeta.count;
      },
      (err) => {
        this.router.navigate(['/erro'])
        alert('Deu ruim ' + err)
      }
    );
  }

  passarPagina(pe: PageEvent) {
    pe.pageIndex;

    this.listarPlanetas(pe.pageIndex + 1);
  }

  onClick(planeta: any) {
    this.dialog.open(PlanetaModalComponent, {
      width: '500px',
      height: '600px',
      data: planeta,
    });
  }
}
