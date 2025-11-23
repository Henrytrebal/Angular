import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Productos, Clientes, Ventas, Empresa } from "../models/api.models";

@Injectable({providedIn:'root'})

export class Apiservice{
private http = inject(HttpClient);

private apiUrl='http://192.168.1.15:8086/api';


getProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.apiUrl}/Productos`);
}

getClientes():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(`${this.apiUrl}/Clientes`);
}
getVentas():Observable<Ventas[]>{
    return this.http.get<Ventas[]>(`${this.apiUrl}/Ventas`);
}
getEmpresa():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.apiUrl}/Empresa`);
}


}