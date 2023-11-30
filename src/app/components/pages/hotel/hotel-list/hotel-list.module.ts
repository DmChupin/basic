import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';

import { HotelListRoutingModule } from './hotel-list-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [CommonModule, HotelListRoutingModule, MatGridListModule, MatProgressSpinnerModule, HotelListComponent],
	exports: [HotelListComponent],
})
export class HotelListModule {}
