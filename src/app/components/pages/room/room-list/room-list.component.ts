import { Component, Input, OnInit } from '@angular/core';
import { RoomsStoreService } from 'src/app/shared/services/rooms/rooms-store.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.less'],
})
export class RoomListComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: RoomsStoreService) {}

	readonly rooms$ = this.service.rooms$;

	ngOnInit(): void {
		this.service.loadRooms(this.hotelId);
	}

	displayedColumns: string[] = ['type', 'sleeps', 'price', 'facilities', 'reserve'];
}
