import { Component, inject, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Apiservice } from '../../services/api.services';
import {Productos } from '../../models/api.models'; 


@Component({
  selector: 'app-products',
  imports: [CommonModule, MatTableModule,MatPaginatorModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, AfterViewInit {
private apiService = inject(Apiservice);

  displayedColumns: string[] = ['id', 'Nombre', 'Detalle','Monto']; 

  dataSource = new MatTableDataSource<Productos>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.apiService.getProductos().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error(err)
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
