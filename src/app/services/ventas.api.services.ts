import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Ventas } from "../models/api.models";


@Injectable({providedIn:'root'})

export class VentasApiservice{
private http = inject(HttpClient);

private apiUrl='http://192.168.1.15:8086/api';

getVentas():Observable<Ventas[]>{
    return this.http.get<Ventas[]>(`${this.apiUrl}/Ventas`);
}

postVentas( vventas: Ventas ) :Observable<Ventas>{
    return this.http.post<Ventas>(`${this.apiUrl}/ventas`,vventas);
}
deleteVentas( id:string ) :Observable<Ventas>{
    return this.http.delete<Ventas>(`${this.apiUrl}/ventas/${id}`);
}
putVentas( vventas :Ventas, id: string ) :Observable<Ventas>{
    return this.http.put<Ventas>(`${this.apiUrl}/ventas/${id}`,vventas);
}
}