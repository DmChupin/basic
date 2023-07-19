import { Component, Input } from '@angular/core';
import { IHotel } from 'src/app/shared/interfaces/hotels.interface';

@Component({
	selector: 'app-room-card',
	templateUrl: './room-card.component.html',
	styleUrls: ['./room-card.component.less'],
})
export class RoomCardComponent {
	@Input() hotel!: IHotel;
}
