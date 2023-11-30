import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.less'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatDatepickerModule,
		MatSlideToggleModule,
		MatButtonModule,
		RouterLink,
	],
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
