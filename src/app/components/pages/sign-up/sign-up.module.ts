import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SignUpComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatInputModule,
		MatRadioModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		RouterModule,
		SignUpRoutingModule,
		ReactiveFormsModule,
	],
	exports: [SignUpComponent],
})
export class SignUpModule {}
