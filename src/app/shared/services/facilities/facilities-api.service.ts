import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IFacility } from '../../interfaces/facility.interface';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class FacilitiesApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getFacilities$(params: Partial<IFacility>): Observable<IFacility[]> {
		return this.httpClient
			.get<IFacility[] | []>('/facilities', { params: { ...params } })
			.pipe(catchError(handleError<IFacility[]>('getReviews', [])));
	}
}
