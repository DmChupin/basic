import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IReview } from '../../interfaces/review.interface';
import { ReviewsApiService } from './reviews-api.service';

@Injectable({
	providedIn: 'root',
})
export class ReviewsStoreService {
	private readonly reviewsStore$ = new BehaviorSubject<IReview[] | null | []>(null);

	constructor(private readonly apiService: ReviewsApiService) {}

	get reviews$(): Observable<IReview[] | [] | null> {
		return this.reviewsStore$.asObservable();
	}

	loadReviews(params: Partial<IReview>) {
		this.apiService.getReviews$(params).subscribe(reviews => {
			this.reviewsStore$.next(reviews);
		});
	}
}
