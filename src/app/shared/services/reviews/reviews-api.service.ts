import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IReview } from '../../interfaces/review.interface';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class ReviewsApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getReviews$(params: any): Observable<IReview[] | []> {
		return this.httpClient
			.get<IReview[] | []>('/reviews', { params: { ...params } })
			.pipe(catchError(handleError<IReview[]>('getReviews', [])));
	}
}
