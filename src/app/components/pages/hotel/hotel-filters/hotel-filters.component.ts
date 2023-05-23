import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-hotel-filters',
	templateUrl: './hotel-filters.component.html',
	styleUrls: ['./hotel-filters.component.less'],
})
export class RoomFiltersComponent {
	filterFormGroup = new FormGroup({
		destination: new FormControl(''),
		arrivalDateStart: new FormControl(),
		arrivalDateEnd: new FormControl(),
		departureDateStart: new FormControl(),
		departureDateEnd: new FormControl(),
		adultCounter: new FormControl(2),
		childCounter: new FormControl(1),
		priceFrom: new FormControl(0),
		priceTo: new FormControl(15000),
		wifi: new FormControl(false),
		condition: new FormControl(false),
		workplace: new FormControl(false),
		smoking: new FormControl(false),
		pets: new FormControl(false),
		guests: new FormControl(false),
		corridor: new FormControl(false),
		ramps: new FormControl(false),
	});
	filter = () => {
		console.log('filter', this.filterFormGroup.value);
	};
}
