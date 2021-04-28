import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmesComponent } from '../filmes.component';

@Component({
  selector: 'app-filmes-modal',
  templateUrl: './filmes-modal.component.html',
  styleUrls: ['./filmes-modal.component.css'],
})
export class FilmesModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FilmesComponent>
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }
}
