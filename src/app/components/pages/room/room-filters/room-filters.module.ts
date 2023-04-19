import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomFiltersComponent } from './room-filters.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [RoomFiltersComponent],
	imports: [
		CommonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatDividerModule,
		MatIconModule,
		MatSliderModule,
		MatInputModule,
		MatCheckboxModule,
		MatButtonModule,
		FormsModule,
	],
	exports: [RoomFiltersComponent],
})
export class RoomFiltersModule {}
