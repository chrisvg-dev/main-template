import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();

    if (token != null) {
      intReq = req.clone({
        headers: req.headers
                  .set('Authorization', 'Bearer ' + token)
      });
    } 
    return next.handle(intReq);
  }
}

/**
 * ESTA CONSTANTE DEBE IMPORTARSE DESDE LOS MÓDULOS DE ANGULAR app.module.ts
 */
export const appInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: AppInterceptorService,
    multi: true
  }
]