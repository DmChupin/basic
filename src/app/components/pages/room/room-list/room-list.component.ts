import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/shared/interfaces/rooms.interface';
import { RoomsService } from 'src/app/shared/services/rooms/rooms.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.less'],
})
export class RoomListComponent implements OnInit {
	@Input()
	hotelId!: number;

	data: IRoom[] = [];

	constructor(private readonly service: RoomsService) {}

	ngOnInit(): void {
		this.getRooms();
	}
	getRooms() {
		this.service.getRooms(this.hotelId).subscribe(rooms => (this.data = rooms));
	}

	displayedColumns: string[] = ['type', 'sleeps', 'price', 'facilities', 'reserve'];
}
