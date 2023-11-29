import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/common/header/header.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseUrlInterceptor } from './shared/utils/base-url/base-url.interceptor';
import { JwtTokenInterceptor } from './shared/utils/jwt-token/jwt-token.interceptor';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, HttpClientModule],
	bootstrap: [AppComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: BaseUrlInterceptor,
		},
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: JwtTokenInterceptor,
		},
	],
})
export class AppModule {}
