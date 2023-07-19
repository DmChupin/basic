import { TestBed } from '@angular/core/testing';

import { FacilitiesStoreService } from './facilities-store.service';

describe('FacilitiesStoreService', () => {
	let service: FacilitiesStoreService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FacilitiesStoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
