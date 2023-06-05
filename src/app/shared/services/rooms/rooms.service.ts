import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoom } from '../../interfaces/rooms.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RoomsService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/rooms';
	getRooms(hotelId: number): Observable<IRoom[]> {
		return this.httpClient.get<IRoom[]>(this.baseUrl, { params: { hotelId } });
	}
}
