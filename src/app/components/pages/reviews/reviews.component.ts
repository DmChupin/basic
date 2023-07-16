import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { ReviewsService } from 'src/app/shared/services/reviews/reviews.service';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.less'],
})
export class ReviewsComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: ReviewsService) {}

	reviews: IReview[] = [];

	ngOnInit(): void {
		this.getReviews();
	}

	getReviews() {
		this.service.getReviews({ hotelId: this.hotelId }).subscribe(reviews => (this.reviews = reviews));
	}
}
