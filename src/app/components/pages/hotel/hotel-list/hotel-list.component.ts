import { Component, OnInit } from '@angular/core';
import { HotelsStoreService } from 'src/app/shared/services/hotels/hotels-store.service';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.less'],
})
export class HotelListComponent implements OnInit {
	constructor(private readonly service: HotelsStoreService) {}

	readonly hotels$ = this.service.hotels$;

	ngOnInit(): void {
		this.service.loadHotels({});
	}
}
