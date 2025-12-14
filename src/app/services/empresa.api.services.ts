import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empresa } from "../models/api.models";

@Injectable({providedIn:'root'})

export class EmpresaApiservice{
private http = inject(HttpClient);

private apiUrl='http://192.168.1.15:8086/api';

getEmpresa():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.apiUrl}/Empresa`);
}

postEmpresa( vempresa: Empresa ) :Observable<Empresa>{
    return this.http.post<Empresa>(`${this.apiUrl}/empresa`,vempresa);
}

deleteEmpresa( id:string ) :Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.apiUrl}/empresa/${id}`);
}
putEmpresa( vempresa :Empresa, id: string ) :Observable<Empresa>{
    return this.http.put<Empresa>(`${this.apiUrl}/empresa/${id}`,vempresa);
}

}