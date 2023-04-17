import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/sign-in',
	},
	{
		path: 'sign-in',
		loadChildren: () => import('./components/pages/sign-in/sign-in.module').then(m => m.SignInModule),
	},
	{
		path: 'sign-up',
		loadChildren: () => import('./components/pages/sign-up/sign-up.module').then(m => m.SignUpModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
