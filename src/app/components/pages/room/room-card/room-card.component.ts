import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from 'src/app/shared/interfaces/hotels.interface';

@Component({
	selector: 'app-room-card',
	templateUrl: './room-card.component.html',
	styleUrls: ['./room-card.component.less'],
})
export class RoomCardComponent implements OnInit {
	@Input() hotel!: IHotel;
	ngOnInit(): void {
		console.log('hotel: ', this.hotel);
	}
}
