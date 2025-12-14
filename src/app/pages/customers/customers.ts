
import { Component, inject, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ClienteApiservice } from '../../services/clientes.api.services';
import { Clientes } from '../../models/api.models'; // Asegúrate de tener la interfaz Cliente
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, MatTableModule,MatPaginatorModule,MatPaginatorModule,MatButtonModule, MatDividerModule,MatIconModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit, AfterViewInit {

private apiService = inject(ClienteApiservice);

  // 1. Define las columnas exactas que quieres ver
  displayedColumns: string[] = ['id', 'nombre', 'email','telefono','Acciones']; 

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
  elimiardatos(id: string): void {
  console.log(id);
  Swal.fire({
        title: 'Estas seguro?',
        text: 'Se eliminara el cliente de foma definitiva',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'si, estoy seguro',
        cancelButtonText: 'No, deseo cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // 1. Llamas al servicio. Esto devuelve un Observable.
          this.apiService.deleteClientes(id).subscribe({
            // 2. Te suscribes al Observable para que la petición se envíe.
            //    'next' maneja la respuesta exitosa del servidor.
            next: (response) => {
              console.log('Venta eliminada con éxito:', response);
              this.ngOnInit();
              // *** IMPORTANTE ***
              // Agrega lógica aquí para actualizar la tabla en la interfaz de usuario
              // (ej. recargar la lista de ventas o eliminar la fila de la lista local).
            },
            // 3. 'error' maneja cualquier fallo de la solicitud.
            error: (err) => {
              console.error(err);
              Swal.fire({
             icon: 'error', // Tipo de ícono
             title: '¡Oh no!', // Título del mensaje
             text: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.', // Texto principal
             footer: '<a href="#">¿Por qué tengo este problema?</a>' // Pie de página opcional
  });
            },
            // 4. 'complete' se ejecuta cuando el Observable termina.
            complete: () => {
              console.log('Proceso de eliminación finalizado.');
            },
          });
          Swal.fire('Eliminado!', 'El cliente ha sido eliminado.', 'success');
        }
      });
    }

  // 4. Vincular el paginador a la tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
