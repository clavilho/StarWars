import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanetasComponent } from '../planetas.component';

@Component({
  selector: 'app-planeta-modal',
  templateUrl: './planeta-modal.component.html',
  styleUrls: ['./planeta-modal.component.css'],
})
export class PlanetaModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PlanetasComponent>
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }
}
