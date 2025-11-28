import { Component, inject, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Apiservice } from '../../services/api.services';
import { Empresa } from '../../models/api.models'; 

@Component({
  selector: 'app-enterprises',
   imports: [CommonModule, MatTableModule,MatPaginatorModule],
  templateUrl: './enterprises.html',
  styleUrl: './enterprises.css',
})
export class Enterprises implements OnInit, AfterViewInit {
private apiService = inject(Apiservice);

  // 1. Define las columnas exactas que quieres ver
  displayedColumns: string[] = ['id', 'RazonSocial', 'Ruc','Pais']; 

  // 2. Inicializa el DataSource con el tipo Cliente
  dataSource = new MatTableDataSource<Empresa>([]);
// 3. Obtener referencia del Paginador del HTML
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.apiService.getEmpresa().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error(err)
    });
  }
  // 4. Vincular el paginador a la tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
