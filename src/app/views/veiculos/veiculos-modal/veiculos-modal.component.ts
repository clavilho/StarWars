import { Personagens } from './../../../shared/interface/personagens';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VeiculosComponent } from '../veiculos.component';

@Component({
  selector: 'app-veiculos-modal',
  templateUrl: './veiculos-modal.component.html',
  styleUrls: ['./veiculos-modal.component.css'],
})
export class VeiculosModalComponent implements OnInit {
  pilotosArray: Personagens[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<VeiculosComponent>
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }
}
