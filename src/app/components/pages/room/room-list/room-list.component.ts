import { Component, Input, OnInit } from '@angular/core';
import { RoomsStoreService } from 'src/app/shared/services/rooms/rooms-store.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.less'],
	standalone: true,
	imports: [NgIf, MatTableModule, MatButtonModule, AsyncPipe],
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
