import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignInReq, ISignInResp } from '../../interfaces/signin.interface';
import { Observable } from 'rxjs';
import { ISignUpReq, ISignUpResp } from '../../interfaces/signup.interface';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private readonly httpClient: HttpClient) {}

	//readonly baseUrl = 'localhost:3000/auth';
	readonly baseUrl = 'http://localhost:7777/auth';

	login(user: ISignInReq): Observable<ISignInResp> {
		return this.httpClient.post<ISignInResp>(`${this.baseUrl}/login`, user);
	}

	register(user: ISignUpReq): Observable<ISignUpResp> {
		return this.httpClient.post<ISignUpResp>(`${this.baseUrl}/register`, user);
	}
}
