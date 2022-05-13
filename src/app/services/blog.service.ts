import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public url: string = "http://localhost:9090/post";

  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<any> {
    return this.http.get(this.url);
  }

}
