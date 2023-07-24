import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent {
	constructor(private readonly service: UsersService, private router: Router) {}

	signUpForm = new FormGroup({
		surname: new FormControl('', Validators.required),
		name: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
		male: new FormControl('1'),
		email: new FormControl('', Validators.required),
		dateOfBirth: new FormControl(null, Validators.required),
		notifications: new FormControl(false),
	});

	register() {
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
					this.router.navigate(['/sign-in']);
				},
				error => console.log('errorResp', error),
			);
	}
}
