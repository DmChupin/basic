import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ReviewsComponent],
	imports: [CommonModule, MatListModule, MatIconModule],
	exports: [ReviewsComponent],
})
export class ReviewsModule {}
