import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FacilitiesApiService } from './facilities-api.service';
import { IFacility } from '../../interfaces/facility.interface';

@Injectable({
	providedIn: 'root',
})
export class FacilitiesStoreService {
	private readonly facilitiesStore$ = new BehaviorSubject<IFacility[] | null | []>(null);

	constructor(private readonly apiService: FacilitiesApiService) {}

	get facilities$(): Observable<IFacility[] | [] | null> {
		return this.facilitiesStore$.asObservable();
	}

	loadFacilities(params: Partial<IFacility>) {
		this.apiService.getFacilities$(params).subscribe(facilities => {
			this.facilitiesStore$.next(facilities);
		});
	}
}
