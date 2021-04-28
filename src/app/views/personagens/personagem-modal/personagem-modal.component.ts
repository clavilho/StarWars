import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-personagem-modal',
  templateUrl: './personagem-modal.component.html',
  styleUrls: ['./personagem-modal.component.css'],
})
export class PersonagemModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PersonagemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
