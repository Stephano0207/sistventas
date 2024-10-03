import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="http://localhost:8000/api/login";
  constructor(private http:HttpClient) { }
  public verificarEmail(email:string){
    return this.http.get<any>(this.url+`/`+email);
  }
  public verificarClave(email:string,clave:string){
    return this.http.get<any>(this.url+`/`+email+`/`+clave);
  }
}
