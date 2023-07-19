import { Component, OnInit } from '@angular/core';
import { images } from './hotel-card-info.mock';
import { ActivatedRoute } from '@angular/router';
import { HotelsStoreService } from 'src/app/shared/services/hotels/hotels-store.service';

@Component({
	selector: 'app-hotel-card-info',
	templateUrl: './hotel-card-info.component.html',
	styleUrls: ['./hotel-card-info.component.less'],
})
export class HotelCardInfoComponent implements OnInit {
	readonly images = images;
	readonly hotelId: number = Number(this.route.snapshot.paramMap.get('id'));

	constructor(private readonly service: HotelsStoreService, private route: ActivatedRoute) {}

	readonly hotel$ = this.service.hotel$;

	ngOnInit(): void {
		this.service.loadHotel(this.hotelId);
	}
}
