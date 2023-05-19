import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ISignInReq } from 'src/app/shared/interfaces/signin.interface';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent {
	constructor(private readonly service: UsersService, private router: Router) {}

	email = new FormControl('');
	fullname = new FormControl('');
	password = new FormControl('');

	login() {
		const data: ISignInReq = {
			email: this.email.value,
			fullname: this.fullname.value,
			password: this.password.value,
		};

		this.service.login(data).subscribe(
			response => {
				console.log('dataResp: ', response);
				localStorage.setItem('jwt', response.token);
				this.router.navigate(['/rooms']);
			},
			error => console.log('errorResp', error),
		);
	}
}
