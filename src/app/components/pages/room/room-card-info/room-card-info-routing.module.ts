import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCardInfoComponent } from './room-card-info.component';
const routes: Routes = [
	{
		path: '',
		component: RoomCardInfoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoomCardInfoRoutingModule {}
