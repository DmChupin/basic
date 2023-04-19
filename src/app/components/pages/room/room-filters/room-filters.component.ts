import { Component } from '@angular/core';

@Component({
	selector: 'app-room-filters',
	templateUrl: './room-filters.component.html',
	styleUrls: ['./room-filters.component.less'],
})
export class RoomFiltersComponent {
	wifi = false;
	conditioner = false;
	workplace = false;
	smoking = false;
	pets = false;
	guests = false;
	corridor = false;
	ramps = false;
}
