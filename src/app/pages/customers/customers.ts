
import { Component, inject, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Apiservice } from '../../services/api.services';
import { Clientes } from '../../models/api.models'; // Asegúrate de tener la interfaz Cliente

@Component({
  selector: 'app-customers',
  imports: [CommonModule, MatTableModule,MatPaginatorModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit, AfterViewInit {
private apiService = inject(Apiservice);

  // 1. Define las columnas exactas que quieres ver
  displayedColumns: string[] = ['id', 'nombre', 'email','telefono']; 

  // 2. Inicializa el DataSource con el tipo Cliente
  dataSource = new MatTableDataSource<Clientes>([]);
// 3. Obtener referencia del Paginador del HTML
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    // 3. Llama al endpoint específico de Clientes
    this.apiService.getClientes().subscribe({
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
