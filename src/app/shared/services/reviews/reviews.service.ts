import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	constructor(private readonly httpClient: HttpClient) {}

	readonly baseUrl = 'http://localhost:7777/reviews';

	getReviews(params: IReview): Observable<IReview[] | []> {
		return this.httpClient.get<IReview[] | []>(this.baseUrl, { params });
	}
}
