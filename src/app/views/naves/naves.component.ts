import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { NavesService } from 'src/app/services/naves.service';
import { Naves } from './interface/naves';
import { MatDialog } from '@angular/material/dialog';
import { NavesModalComponent } from './naves-modal/naves-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
})
export class NavesComponent implements OnInit {
  navesArray: Naves[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  constructor(private navesService: NavesService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.listarNaves(1);
  }

  listarNaves(numeroPagin: number) {
    this.navesService.getNaves(numeroPagin).subscribe(
      (nave) => {
        this.navesArray = nave.results;
        this.pageSize = nave.count;
      },
      (err) => {
        this.router.navigate(['/erro'])
        alert('Deu ruim ' + err)
      }
    );
  }

  passarPagina(pe: PageEvent) {
    pe.pageIndex;
    console.log(pe);

    this.listarNaves(pe.pageIndex + 1);
  }
  openDialog(naves: any) {
    this.dialog.open(NavesModalComponent, {
      width: '500px',
      height: '430px',
      data: naves,
    });
  }
}
