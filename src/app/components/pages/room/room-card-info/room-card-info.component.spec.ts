import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardInfoComponent } from './room-card-info.component';

describe('RoomCardInfoComponent', () => {
	let component: RoomCardInfoComponent;
	let fixture: ComponentFixture<RoomCardInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RoomCardInfoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RoomCardInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
