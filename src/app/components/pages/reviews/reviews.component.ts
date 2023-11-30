import { Component, Input, OnInit } from '@angular/core';
import { ReviewsStoreService } from 'src/app/shared/services/reviews/reviews-store.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.less'],
	standalone: true,
	imports: [NgIf, MatListModule, NgFor, MatIconModule, AsyncPipe],
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
