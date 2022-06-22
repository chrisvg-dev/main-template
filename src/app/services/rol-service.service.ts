import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {
  private URL: string = 'http://localhost:8002/api/roles';
  constructor( private http: HttpClient ) {}

  public findAll( ) : Observable<any>{
    return this.http.get(this.URL);
  }
}
