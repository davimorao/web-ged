import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EditUnitDialogComponent } from './edit-unit-dialog.component';
import { UserPreferencesService } from '../../services/user-preferences.service';

export interface Unit {
  id: number;
  name: string;
  document: string;
  documentType: string;
  phone: string;
  email: string;
  logo?: string;
}

@Component({
  selector: 'app-units-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsPageComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'document', 'actions'];
  dataSource: Unit[] = [
    {
      id: 1,
      name: 'Unidade Centro',
      document: '12345678000199',
      documentType: 'CNPJ',
      phone: '1133333333',
      email: 'centro@clinica.com.br'
    },
    {
      id: 2,
      name: 'Unidade Norte',
      document: '98765432000199',
      documentType: 'CNPJ',
      phone: '1144444444',
      email: 'norte@clinica.com.br'
    }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Unit>;

  isDarkMode: boolean = true;

  constructor(
    private dialog: MatDialog,
    private userPreferences: UserPreferencesService
  ) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Implement filtering logic here
  }

  editUnit(unit: Unit) {
    const dialogRef = this.dialog.open(EditUnitDialogComponent, {
      width: '500px',
      data: { ...unit }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update unit in the table
        const index = this.dataSource.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.table.renderRows();
        }
      }
    });
  }

  deleteUnit(unit: Unit) {
    // Implement delete logic
  }
}