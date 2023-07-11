import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [ReviewsComponent],
	imports: [CommonModule, MatListModule],
	exports: [ReviewsComponent],
})
export class ReviewsModule {}
