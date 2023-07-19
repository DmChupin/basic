import { Component, Input, OnInit } from '@angular/core';
import { ReviewsStoreService } from 'src/app/shared/services/reviews/reviews-store.service';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.less'],
})
export class ReviewsComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: ReviewsStoreService) {}

	readonly reviews$ = this.service.reviews$;

	ngOnInit(): void {
		this.service.loadReviews({ hotelId: this.hotelId });
	}
}
