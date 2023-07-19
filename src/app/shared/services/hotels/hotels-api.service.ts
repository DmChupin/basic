import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHotel } from '../../interfaces/hotels.interface';
import { Observable, catchError } from 'rxjs';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class HotelsApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getHotels$(params: any): Observable<IHotel[]> {
		return this.httpClient
			.get<IHotel[] | []>('/hotels', { params: { ...params } })
			.pipe(catchError(handleError<IHotel[]>('getReviews', [])));
	}
	getHotel$(id: number): Observable<IHotel> {
		return this.httpClient.get<IHotel>(`/hotels/${id}`).pipe(catchError(handleError<IHotel>(`getHotel id=${id}`)));
	}
}
