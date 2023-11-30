import { Component, OnInit } from '@angular/core';
import { HotelsStoreService } from 'src/app/shared/services/hotels/hotels-store.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RoomCardComponent } from '../../room/room-card/room-card.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RoomFiltersComponent } from '../hotel-filters/hotel-filters.component';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.less'],
	standalone: true,
	imports: [RoomFiltersComponent, NgIf, NgFor, RoomCardComponent, MatProgressSpinnerModule, AsyncPipe],
})
export class HotelListComponent implements OnInit {
	constructor(private readonly service: HotelsStoreService) {}

	readonly hotels$ = this.service.hotels$;

	ngOnInit(): void {
		this.service.loadHotels({});
	}
}
