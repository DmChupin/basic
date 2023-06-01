import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel } from '../../interfaces/hotels.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
	providedIn: 'root',
})
export class HotelsService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/hotels';

	getHotels(): Observable<IHotel[] | []> {
		return this.httpClient.get<IHotel[] | []>(this.baseUrl);
	}

	getHotel(id: number): Observable<IHotel> {
		return this.httpClient.get<IHotel>(this.baseUrl, { params: { id } });
	}
}
