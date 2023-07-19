import { TestBed } from '@angular/core/testing';

import { ReviewsStoreService } from './reviews-store.service';

describe('ReviewsStoreService', () => {
	let service: ReviewsStoreService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ReviewsStoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
