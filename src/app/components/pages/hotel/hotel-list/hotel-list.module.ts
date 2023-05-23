import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';

import { RoomCardModule } from '../../room/room-card/room-card.module';
import { HotelListRoutingModule } from './hotel-list-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { RoomFiltersModule } from '../hotel-filters/hotel-filters.module';

@NgModule({
	declarations: [HotelListComponent],
	imports: [CommonModule, RoomCardModule, HotelListRoutingModule, MatGridListModule, RoomFiltersModule],
	exports: [HotelListComponent],
})
export class HotelListModule {}
