import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
HttpErrorResponse, 
HttpStatusCode} from '@angular/common/http';
import { Observable,catchError,throwError,retry } from 'rxjs';

import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
  })
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private login:LoginService){}

    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                //retry(1),
                catchError((error: HttpErrorResponse) => {
                    let message = '';
                    if (error.status==HttpStatusCode.Unauthorized){
                        return throwError(() => new Error(''));
                    }
                    if (error.error instanceof ErrorEvent) {
                        // handle client-side error
                        message = `Error: ${error.error.message}`;
                    } else {
                        // handle server-side error
                        message = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(message);
                    return throwError(() => new Error(message));
                })
            )
    }
}