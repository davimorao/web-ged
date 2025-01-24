import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EditUnitDialogComponent } from './edit-unit-dialog.component';
import { UserPreferencesService } from '../../services/user-preferences.service';

declare var $: any;

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
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsPageComponent implements OnInit, AfterViewInit {
  dataSource = {
    data: [
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
    ]
  };

  title: string = 'Unidades';
  isDarkMode: boolean = true;
  private dataTable: any;

  constructor(
    private dialog: MatDialog,
    private userPreferences: UserPreferencesService
  ) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  private initializeDataTable() {
    this.dataTable = $('#unitsTable').DataTable({
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
      },
      columnDefs: [
        {
          targets: [0, 4], // checkbox and actions columns
          orderable: false
        }
      ],
      order: [[1, 'asc']], // Order by ID column by default
      responsive: true,
      pageLength: 10,
      lengthMenu: [5, 10, 25, 50]
    });
  }

  editUnit(unit: Unit) {
    const dialogRef = this.dialog.open(EditUnitDialogComponent, {
      width: '500px',
      data: { ...unit }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update unit in the data source
        const index = this.dataSource.data.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          // Refresh DataTable
          this.dataTable.clear();
          this.dataTable.rows.add(this.dataSource.data);
          this.dataTable.draw();
        }
      }
    });
  }

  deleteUnit(unit: Unit) {
    const index = this.dataSource.data.findIndex(u => u.id === unit.id);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      // Refresh DataTable
      this.dataTable.clear();
      this.dataTable.rows.add(this.dataSource.data);
      this.dataTable.draw();
    }
  }

  ngOnDestroy() {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }
}
