import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelCardInfoComponent } from './hotel-card-info.component';
const routes: Routes = [
	{
		path: '',
		component: HotelCardInfoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HotelCardInfoRoutingModule {}
