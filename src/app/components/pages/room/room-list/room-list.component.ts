import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IHotels } from 'src/app/shared/interfaces/hotels.interface';
import { HotelsService } from 'src/app/shared/services/hotels/hotels.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.less'],
})
export class RoomListComponent implements OnInit {
	constructor(private readonly service: HotelsService, private changeDetectorRef: ChangeDetectorRef) {}

	hotels: IHotels[] = [];
	getHotels(): void {
		this.service.getHotels().subscribe(hotels => (this.hotels = hotels));
	}

	ngOnInit(): void {
		this.getHotels();
	}
}
