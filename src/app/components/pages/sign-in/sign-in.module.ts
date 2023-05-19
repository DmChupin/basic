import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SignInComponent],
	imports: [CommonModule, MatInputModule, MatButtonModule, RouterModule, SignInRoutingModule, ReactiveFormsModule],
	exports: [SignInComponent],
})
export class SignInModule {}
