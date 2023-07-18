import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IReview } from '../../interfaces/review.interface';
import { catchError } from 'rxjs';
import { handleError } from '../../utils/error.handler';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/reviews';

	getReviews(params: any): Observable<IReview[] | []> {
		return this.httpClient
			.get<IReview[] | []>(this.baseUrl, { params: { ...params } })
			.pipe(catchError(handleError<IReview[]>('getReviews', [])));
	}
}
