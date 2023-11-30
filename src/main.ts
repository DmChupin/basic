import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { JwtTokenInterceptor } from './app/shared/utils/jwt-token/jwt-token.interceptor';
import { BaseUrlInterceptor } from './app/shared/utils/base-url/base-url.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, AppRoutingModule),
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
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi()),
	],
}).catch(err => console.error(err));
