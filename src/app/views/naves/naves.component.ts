import { MatPaginator, PageEvent } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavesService } from 'src/app/services/naves.service';
import { Naves } from './interface/naves';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
})
export class NavesComponent implements OnInit {
  navesArray: Naves[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  constructor(private navesService: NavesService) {}

  ngOnInit(): void {
    this.listarNaves(1);
  }

  listarNaves(numeroPagin: number) {
    this.navesService.getNaves(numeroPagin).subscribe(
      (nave) => {
        this.navesArray = nave.results;
        this.pageSize = nave.count;
      },
      (err) => alert('Deu ruim ' + err)
    );
  }

  passarPagina(pe: PageEvent) {
    pe.pageIndex;
    console.log(pe);

    this.listarNaves(pe.pageIndex + 1);
  }
}
