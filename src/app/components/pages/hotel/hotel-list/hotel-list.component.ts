import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/app/shared/interfaces/hotels.interface';
import { HotelsService } from 'src/app/shared/services/hotels/hotels.service';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.less'],
})
export class HotelListComponent implements OnInit {
	constructor(private readonly service: HotelsService) {}

	hotels: IHotel[] = [];
	getHotels(): void {
		this.service.getHotels().subscribe(hotels => (this.hotels = hotels));
	}

	ngOnInit(): void {
		this.getHotels();
	}
}
