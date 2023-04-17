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
		path: 'rooms',
		loadChildren: () => import('./components/pages/room/room-list/room-list.module').then(m => m.RoomListModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
