import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardInfoComponent } from './hotel-card-info.component';
import { CarouselModule } from 'src/app/components/common/carousel/carousel.module';
import { MatIconModule } from '@angular/material/icon';
import { HotelCardInfoRoutingModule } from './hotel-card-info-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [HotelCardInfoComponent],
	imports: [
		CommonModule,
		CarouselModule,
		MatIconModule,
		HotelCardInfoRoutingModule,
		MatGridListModule,
		MatListModule,
	],
	exports: [HotelCardInfoComponent],
})
export class HotelCardInfoModule {}
