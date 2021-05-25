import { Signup } from './../../shared/interfaces/signup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(
  private http: HttpClient
) { }

carregarDados(){
  return this.http.get(`${API}/login`)
}

authenticate(email: string, senha: string){
  return this.http.post(`${API}/login`,{email, senha})
}

cadastrarUsuario(usuario: any){
  return this.http.post(`${API}/usuario`, usuario)
}
}
