import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardInfoComponent } from './hotel-card-info.component';

import { MatIconModule } from '@angular/material/icon';
import { HotelCardInfoRoutingModule } from './hotel-card-info-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		HotelCardInfoRoutingModule,
		MatGridListModule,
		MatListModule,
		HotelCardInfoComponent,
	],
	exports: [HotelCardInfoComponent],
})
export class HotelCardInfoModule {}
