import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotels } from '../../interfaces/hotels.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
	providedIn: 'root',
})
export class HotelsService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/hotels';
	getHotels(): Observable<IHotels[] | []> {
		return this.httpClient.get<IHotels[] | []>(this.baseUrl);
	}
}
