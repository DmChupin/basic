import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [RoomCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
	exports: [RoomCardComponent],
})
export class RoomCardModule {}
