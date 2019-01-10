import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';






@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.auth.currentUserValue;
        console.log(currentUser[0].token);
        
        if (currentUser[0].user && currentUser[0].token) {
            
            request = request.clone({
                setHeaders: { 
                    Authorization: "Bearer "+currentUser[0].token
                }
            });
        }
    

        return next.handle(request);
    }
}