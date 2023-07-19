import { TestBed } from '@angular/core/testing';

import { FacilitiesApiService } from './facilities-api.service';

describe('FacilitiesApiService', () => {
	let service: FacilitiesApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FacilitiesApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
