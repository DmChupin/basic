import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list.component';

import { RoomCardModule } from '../room-card/room-card.module';
import { RoomListRoutingModule } from './room-list-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [RoomListComponent],
	imports: [CommonModule, RoomCardModule, RoomListRoutingModule, MatGridListModule],
	exports: [RoomListComponent],
})
export class RoomListModule {}
