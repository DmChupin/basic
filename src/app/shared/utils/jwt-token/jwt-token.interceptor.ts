import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const jwtToken = localStorage.getItem('jwt-token');
		const newRequest = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + jwtToken) });
		return next.handle(newRequest);
	}
}
