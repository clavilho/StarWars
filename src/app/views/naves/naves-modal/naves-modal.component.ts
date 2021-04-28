import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavesComponent } from '../naves.component';

@Component({
  selector: 'app-naves-modal',
  templateUrl: './naves-modal.component.html',
  styleUrls: ['./naves-modal.component.css'],
})
export class NavesModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NavesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
