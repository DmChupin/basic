import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [RoomCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, RouterModule],
	exports: [RoomCardComponent],
})
export class RoomCardModule {}
