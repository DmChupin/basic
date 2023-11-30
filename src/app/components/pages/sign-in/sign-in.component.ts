import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ISignInReq } from 'src/app/shared/interfaces/signin.interface';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { MyErrorStateMatcher } from 'src/app/shared/utils/error-form-control.handler';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.less'],
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatButtonModule, RouterLink],
})
export class SignInComponent {
	constructor(private readonly service: UsersService, private router: Router) {}

	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required]);

	matcher = new MyErrorStateMatcher();

	login() {
		const data: ISignInReq = {
			email: this.email.value,
			password: this.password.value,
		};

		this.service.login(data).subscribe(
			response => {
				localStorage.setItem('jwt-token', response.token);
				this.router.navigate(['/hotels']);
			},
			error => console.log('errorResp', error),
		);
	}
}
