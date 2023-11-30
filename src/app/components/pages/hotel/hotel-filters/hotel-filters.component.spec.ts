import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFiltersComponent } from './hotel-filters.component';

describe('RoomFiltersComponent', () => {
	let component: RoomFiltersComponent;
	let fixture: ComponentFixture<RoomFiltersComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RoomFiltersComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RoomFiltersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
