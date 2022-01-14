import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private helper: JwtHelperService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = 'Bearer ' + this.helper.tokenGetter()
    // Clone the request to add the new header
    const r1 = req.clone({ setHeaders: { Authorization: token } });
    const r2 = r1.clone({ setHeaders: { "Cache-Control": 'no-cache' } });
    const r3 = r2.clone({ setHeaders: { Pragma: 'no-cache' } });


    // Pass the cloned request instead of the original request to the next handle
    return next.handle(r3);
  }
}

