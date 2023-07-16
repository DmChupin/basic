import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FacilitiesComponent } from './facilities.component';

@NgModule({
	declarations: [FacilitiesComponent],
	imports: [CommonModule, MatIconModule, MatListModule],
	exports: [FacilitiesComponent],
})
export class FacilitiesModule {}
