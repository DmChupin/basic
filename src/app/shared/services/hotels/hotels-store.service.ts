import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHotel } from '../../interfaces/hotels.interface';
import { HotelsApiService } from './hotels-api.service';

@Injectable({
	providedIn: 'root',
})
export class HotelsStoreService {
	private readonly hotelsStore$ = new BehaviorSubject<IHotel[] | null | []>(null);
	private readonly hotelStore$ = new BehaviorSubject<IHotel | null>(null);

	constructor(private readonly apiService: HotelsApiService) {}

	get hotels$(): Observable<IHotel[] | [] | null> {
		return this.hotelsStore$.asObservable();
	}
	get hotel$(): Observable<IHotel | null> {
		return this.hotelStore$.asObservable();
	}

	loadHotels(params: Partial<IHotel>) {
		this.apiService.getHotels$(params).subscribe(hotels => {
			this.hotelsStore$.next(hotels);
		});
	}
	loadHotel(id: number) {
		this.apiService.getHotel$(id).subscribe(hotel => {
			this.hotelStore$.next(hotel);
		});
	}
}
