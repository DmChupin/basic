import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RoomListComponent } from './room-list.component';

@NgModule({
	declarations: [RoomListComponent],
	imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
	exports: [RoomListComponent],
})
export class RoomListModule {}
