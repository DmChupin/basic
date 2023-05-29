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
	{
		path: 'hotels',
		loadChildren: () =>
			import('./components/pages/hotel/hotel-list/hotel-list.module').then(m => m.HotelListModule),
	},
	{
		path: 'hotels/:id',
		loadChildren: () =>
			import('./components/pages/hotel/hotel-card-info/hotel-card-info.module').then(m => m.HotelCardInfoModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
