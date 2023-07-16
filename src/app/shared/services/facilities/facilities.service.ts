import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFacility } from '../../interfaces/facility.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
	providedIn: 'root',
})
export class FacilitiesService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/facilities';

	getFacilities(params: any): Observable<IFacility[] | []> {
		return this.httpClient.get<IFacility[] | []>(this.baseUrl, { params: { ...params } });
	}
}
