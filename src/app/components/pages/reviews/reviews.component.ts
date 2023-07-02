import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.less'],
})
export class ReviewsComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: ReviewsService);

	reviews: IReview[] = [];

	ngOnInit(): void {
		this.getReviews();
	}

	getReviews() {
		this.service.getReviews(this.hotelId).subscribe(reviews => (this.reviews = reviews));
	}
}
