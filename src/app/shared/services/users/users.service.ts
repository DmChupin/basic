import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISignInReq, ISignInResp } from '../../interfaces/signin.interface';
import { ISignUpReq, ISignUpResp } from '../../interfaces/signup.interface';
import { UsersApiService } from './users-api.service';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private readonly apiService: UsersApiService) {}

	login(user: ISignInReq) {
		return this.apiService.login$(user);
	}
	register(user: ISignUpReq) {
		return this.apiService.register$(user);
	}
}
