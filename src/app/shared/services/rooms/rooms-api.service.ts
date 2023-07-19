import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IRoom } from '../../interfaces/rooms.interface';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class RoomsApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getRooms$(hotelId: number): Observable<IRoom[]> {
		return this.httpClient
			.get<IRoom[]>('/rooms', { params: { hotelId } })
			.pipe(catchError(handleError<IRoom[]>('getRooms', [])));
	}
}
