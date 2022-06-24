import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor(private router: Router) {
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)! //! esto quiere decir que yo se lo que hago angular
  }

  public isLogged(): boolean {
    if(this.getToken() || this.getToken()!=null) {
      return true;
    } 
      return false;
      
  }

  public getUsername(): any {
    if(this.isLogged()) {
      return null;
    }
    // OBTENER NOMBRES DE USUARIO Y ROLES DEL TOKEN
    /**
     * PAYLOAD
     * es el conjunto de datos transmitidos útiles, que se obtienen de excluir cabeceras, 
     * metadatos, información de control y otros datos que son enviados para facilitar la 
     * entrega del mensaje.
     */
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload); // DECODIFICA LA CADENA USANDO LA CODIFICACIÓN BASE 64
    const values = JSON.parse(payloadDecoded)
    return values.sub;
  }

  public getIsAdmin(): boolean {
    if(!this.isLogged()) {
      return false;
    }
    // OBTENER NOMBRES DE USUARIO Y ROLES DEL TOKEN
    /**
     * PAYLOAD
     * es el conjunto de datos transmitidos útiles, que se obtienen de excluir cabeceras, 
     * metadatos, información de control y otros datos que son enviados para facilitar la 
     * entrega del mensaje.
     */
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload); // DECODIFICA LA CADENA USANDO LA CODIFICACIÓN BASE 64
    const values = JSON.parse(payloadDecoded);
    const roles = values.authorities;

    if (roles.indexOf('ROLE_ROOT') < 0) {
      return false;
    }
    return true;
  }

  public logOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['auth']);
  }
}
