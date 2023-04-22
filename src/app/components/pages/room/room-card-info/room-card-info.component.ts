import { Component } from '@angular/core';
import { images } from './room-card-info.mock';

@Component({
	selector: 'app-room-card-info',
	templateUrl: './room-card-info.component.html',
	styleUrls: ['./room-card-info.component.less'],
})
export class RoomCardInfoComponent {
	readonly images = images;
}
