import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL: string = 'http://localhost:8090/api/auth/users';
  private URL_AUTH: string = 'http://localhost:8090/api/security/oauth/token';
  constructor( private http: HttpClient ) {}

  public register( user: any ) : Observable<any>{
    return this.http.post(this.URL, user);
  }
  public login( user: any ) : Observable<any>{
    return this.http.post(
      this.URL_AUTH, 
      user, 
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set( 'Authorization', 'Basic ' + btoa('angularapp:Secret12345@'))
      });
  }

  public findAll( ) : Observable<any>{
    return this.http.get(this.URL);
  }

  public deleteById( id: number ) : Observable<any>{
    return this.http.delete(this.URL + "/delete/" + id);
  }
}
