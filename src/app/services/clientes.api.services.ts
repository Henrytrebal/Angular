import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Clientes} from "../models/api.models";

@Injectable({providedIn:'root'})

export class ClienteApiservice{
private http = inject(HttpClient);

private apiUrl='http://192.168.1.15:8086/api';

getClientes():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(`${this.apiUrl}/Clientes`);
}

postClientes( vclientes: Clientes ) :Observable<Clientes>{
    return this.http.post<Clientes>(`${this.apiUrl}/clientes`,vclientes);
}

deleteClientes(id: string) :Observable<Clientes>{
    return this.http.delete<Clientes>(`${this.apiUrl}/clientes/${id}`);
}

putClientes( vclientes: Clientes, id: string ) :Observable<Clientes>{
    return this.http.put<Clientes>(`${this.apiUrl}/clientes/${id}`,vclientes);
}
}