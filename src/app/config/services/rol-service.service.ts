import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const credentials = btoa('angularapp' + ':' + 'Secret12345@');
const HTTP_HEADERS = new HttpHeaders( {  
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + credentials 
});


@Injectable({
  providedIn: 'root'
})
export class RolServiceService {
  private URL: string = 'http://localhost:8090/api/auth/roles';
  constructor( private http: HttpClient ) {}

  public findAll( ) : Observable<any>{
    return this.http.get(this.URL, 
      {
        headers: HTTP_HEADERS
      });
  }
}
