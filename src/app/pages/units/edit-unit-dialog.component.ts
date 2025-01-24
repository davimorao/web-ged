import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Unit } from './units.component';

@Component({
  selector: 'app-edit-unit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  template: `
    <div class="edit-unit-dialog">
      <h2 mat-dialog-title>{{ data.id ? 'Edit Unit' : 'New Unit' }}</h2>
      
      <div mat-dialog-content>
        <div class="logo-upload">
          <div class="logo-preview">
            <i class="fas fa-cloud-upload-alt"></i>
            <span>Upload Logo</span>
          </div>
          <button type="button" class="upload-btn">Choose File</button>
          <small>BMP, JPEG, PNG (Max: 2MB)</small>
        </div>

        <div class="form-group">
          <label>Unit Name</label>
          <div class="form-icon">
            <input type="text" [(ngModel)]="data.name" class="form-control" placeholder="Enter unit name">
            <i class="fas fa-building"></i>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Document Type</label>
            <mat-select [(ngModel)]="data.documentType">
              <mat-option value="CNPJ">CNPJ</mat-option>
              <mat-option value="CPF">CPF</mat-option>
            </mat-select>
          </div>

          <div class="form-group">
            <label>Document Number</label>
            <div class="form-icon">
              <input type="text" [(ngModel)]="data.document" class="form-control" placeholder="Enter document number">
              <i class="fas fa-file-alt"></i>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>Phone</label>
          <div class="form-icon">
            <input type="tel" [(ngModel)]="data.phone" class="form-control" placeholder="Enter phone number">
            <i class="fas fa-phone"></i>
          </div>
        </div>

        <div class="form-group">
          <label>Email</label>
          <div class="form-icon">
            <input type="email" [(ngModel)]="data.email" class="form-control" placeholder="Enter email">
            <i class="fas fa-envelope"></i>
          </div>
        </div>
      </div>

      <div mat-dialog-actions>
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-button color="primary" (click)="onSave()">Save</button>
      </div>
    </div>
  `,
  styles: [`
    .edit-unit-dialog {
      padding: 1.5rem;
      color: var(--text-color);
    }

    .logo-upload {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .logo-preview {
      width: 120px;
      height: 120px;
      border: 2px dashed rgba(255,255,255,0.2);
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      color: var(--text-color);
    }

    .logo-preview i {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .upload-btn {
      background: var(--accent-color);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }

    small {
      color: var(--text-color);
      opacity: 0.7;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }

    .form-icon {
      position: relative;
    }

    .form-icon input {
      width: 100%;
      padding: 0.75rem 1rem;
      padding-left: 2.5rem;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 0.25rem;
      background: rgba(255,255,255,0.05);
      color: var(--text-color);
    }

    .form-icon i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-color);
      opacity: 0.7;
    }

    mat-dialog-actions {
      justify-content: flex-end;
      gap: 1rem;
    }
  `]
})
export class EditUnitDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditUnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Unit
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}