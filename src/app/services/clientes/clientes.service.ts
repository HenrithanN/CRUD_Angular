import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

constructor(
  private http: HttpClient
) { }

  /*
  CREATE
  */
  cadastrarDados(body:any){
    return this.http.post(`${API}/clientes`,body);
  }
  /*
  READ
  */
  listarTodos() : Observable<Clientes>{
    return this.http.get<Clientes>(`${API}/clientes`);
  }

  listarUm(id: number){
    return this.http.get(`${API}/clientes/${id}`);
  }
  /*
  UPDATE
  */
  atualizarDados(body: any){
    return this.http.put(`${API}/clientes/${body.id}`,body);
  }
  /*
  DELETE
  */
  deletarDados(id: number){
    return this.http.delete(`${API}/clientes/${id}`);
  }

}
