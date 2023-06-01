import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardInfoComponent } from './hotel-card-info.component';

describe('HotelCardInfoComponent', () => {
	let component: HotelCardInfoComponent;
	let fixture: ComponentFixture<HotelCardInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HotelCardInfoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HotelCardInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
