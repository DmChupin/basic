import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-hotel-filters',
	templateUrl: './hotel-filters.component.html',
	styleUrls: ['./hotel-filters.component.less'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatDividerModule,
		MatCheckboxModule,
		MatButtonModule,
	],
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
