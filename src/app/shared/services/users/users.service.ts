import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignInReq, ISignInResp } from '../../interfaces/signin.interface';
import { Observable, catchError } from 'rxjs';
import { ISignUpReq, ISignUpResp } from '../../interfaces/signup.interface';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private readonly httpClient: HttpClient) {}

	//readonly baseUrl = 'localhost:3000/auth';
	readonly baseUrl = 'http://localhost:7777/auth';

	login(user: ISignInReq): Observable<ISignInResp> {
		return this.httpClient
			.post<ISignInResp>(`${this.baseUrl}/login`, user)
			.pipe(catchError(handleError<ISignInResp>(`login user=${JSON.stringify(user)}`)));
	}

	register(user: ISignUpReq): Observable<ISignUpResp> {
		return this.httpClient
			.post<ISignUpResp>(`${this.baseUrl}/register`, user)
			.pipe(catchError(handleError<ISignInResp>(`register user=${JSON.stringify(user)}`)));
	}
}
