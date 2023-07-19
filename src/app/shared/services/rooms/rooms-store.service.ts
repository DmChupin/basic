import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRoom } from '../../interfaces/rooms.interface';
import { RoomsApiService } from './rooms-api.service';

@Injectable({
	providedIn: 'root',
})
export class RoomsStoreService {
	private readonly roomsStore$ = new BehaviorSubject<IRoom[] | null | []>(null);

	constructor(private readonly apiService: RoomsApiService) {}

	get rooms$(): Observable<IRoom[] | [] | null> {
		return this.roomsStore$.asObservable();
	}

	loadRooms(hotelId: number) {
		return this.apiService.getRooms$(hotelId).subscribe(rooms => {
			this.roomsStore$.next(rooms);
		});
	}
}
