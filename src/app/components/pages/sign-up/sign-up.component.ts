import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISignUpReq } from 'src/app/shared/interfaces/signup.interface';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent {
	constructor(private readonly service: UsersService, private router: Router) {}

	signUpForm = new FormGroup({
		surname: new FormControl(''),
		name: new FormControl(''),
		password: new FormControl(''),
		male: new FormControl('1'),
		email: new FormControl(''),
		dateOfBirth: new FormControl(),
		notifications: new FormControl(false),
	});

	register() {
		console.log('signUpForm', this.signUpForm.value);
		const { surname, name, password, male, email, dateOfBirth, notifications } = this.signUpForm.value;
		this.service
			.register({
				surname,
				name,
				password,
				male,
				email,
				dateOfBirth,
				notifications,
			})
			.subscribe(
				response => {
					console.log('dataResp: ', response);
					localStorage.setItem('jwt', response.token);
					this.router.navigate(['/rooms']);
				},
				error => console.log('errorResp', error),
			);
	}
}
