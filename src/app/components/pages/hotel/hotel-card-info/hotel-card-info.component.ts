import { Component, OnInit } from '@angular/core';
import { images } from './hotel-card-info.mock';
import { HotelsService } from 'src/app/shared/services/hotels/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { IHotel } from 'src/app/shared/interfaces/hotels.interface';

@Component({
	selector: 'app-hotel-card-info',
	templateUrl: './hotel-card-info.component.html',
	styleUrls: ['./hotel-card-info.component.less'],
})
export class HotelCardInfoComponent implements OnInit {
	constructor(private readonly service: HotelsService, private route: ActivatedRoute) {}

	readonly images = images;
	readonly hotelId: number = Number(this.route.snapshot.paramMap.get('id'));
	hotel: Partial<IHotel> = {};

	ngOnInit(): void {
		this.getHotel();
	}

	getHotel() {
		this.service.getHotel(this.hotelId).subscribe(hotel => (this.hotel = hotel));
	}
}
