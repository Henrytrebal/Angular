import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Productos } from "../models/api.models";

@Injectable({providedIn:'root'})

export class ProductosApiservice{
private http = inject(HttpClient);

private apiUrl='http://192.168.1.15:8086/api';

getProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.apiUrl}/Productos`);
}

postProductos( vproductos: Productos ) :Observable<Productos>{
    return this.http.post<Productos>(`${this.apiUrl}/productos`,vproductos);
}

deleteProductos( id:string ) :Observable<Productos>{
    return this.http.delete<Productos>(`${this.apiUrl}/productos/${id}`);
}
putProductos( vproductos :Productos, id: string ) :Observable<Productos>{
    return this.http.put<Productos>(`${this.apiUrl}/productos/${id}`,vproductos);
}

}