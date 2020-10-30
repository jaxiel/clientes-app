import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs/internal/observable/of';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
// import { of } from 'rxjs/internal/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// Otra forma diferente al observable
// por operador Map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes'

  private httpHeaders =new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable <Cliente[]> {
  //  return of(CLIENTES);
  return this.http.get<Cliente[]>(this.urlEndPoint);

  // Con map
  //return this.http.get(this.urlEndPoint).pipe(
    //  Cont TypeScript
  //  map( (response) => response as Cliente[])
  // Otra forma con JavaScript, funciones anonimas
  //map(function (response) {return response as Cliente[]})
//  );
  }

  create(cliente: Cliente) : Observable <Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers: this.httpHeaders})
  }


}
