import { TestBed } from '@angular/core/testing';

import { RoomsStoreService } from './rooms-store.service';

describe('RoomsStoreService', () => {
	let service: RoomsStoreService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RoomsStoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
