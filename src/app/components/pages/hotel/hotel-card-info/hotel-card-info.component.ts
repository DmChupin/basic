import { Component, OnInit } from '@angular/core';
import { images } from './hotel-card-info.mock';
import { ActivatedRoute } from '@angular/router';
import { HotelsStoreService } from 'src/app/shared/services/hotels/hotels-store.service';
import { RoomListComponent } from '../../room/room-list/room-list.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { FacilitiesComponent } from '../../facilities/facilities.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselDirective } from '../../../common/carousel/carousel.directive';

@Component({
	selector: 'app-hotel-card-info',
	templateUrl: './hotel-card-info.component.html',
	styleUrls: ['./hotel-card-info.component.less'],
	standalone: true,
	imports: [CarouselDirective, MatIconModule, FacilitiesComponent, ReviewsComponent, RoomListComponent],
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
