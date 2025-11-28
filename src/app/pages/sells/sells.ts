import { Component, inject, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Apiservice } from '../../services/api.services';
import { Ventas } from '../../models/api.models';

@Component({
  selector: 'app-sells',
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './sells.html',
  styleUrl: './sells.css',
})
export class Sells implements OnInit, AfterViewInit {
private apiService = inject(Apiservice);

  // 1. Define las columnas exactas que quieres ver
  displayedColumns: string[] = ['id', 'idProducto', 'idClientes', 'cantidad', 'PrecioUnitario', 'Total', 'FechaVenta']; 

  // 2. Inicializa el DataSource con el tipo Ventas
  dataSource = new MatTableDataSource<Ventas>([]);
// 3. Obtener referencia del Paginador del HTML
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.apiService.getVentas().subscribe({
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
