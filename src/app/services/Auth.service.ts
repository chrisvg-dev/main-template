import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL: string = 'http://localhost:8002/api/auth';
  constructor( private http: HttpClient ) {}

  public register( user: any ) : Observable<any>{
    return this.http.post(this.URL, user);
  }

  public findAll( ) : Observable<any>{
    return this.http.get(this.URL);
  }

  public deleteById( id: number ) : Observable<any>{
    return this.http.delete(this.URL + "/delete/" + id);
  }
}
