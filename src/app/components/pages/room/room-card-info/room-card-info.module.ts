import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardInfoComponent } from './room-card-info.component';
import { CarouselModule } from 'src/app/components/common/carousel/carousel.module';
import { MatIconModule } from '@angular/material/icon';
import { RoomCardInfoRoutingModule } from './room-card-info-routing.module';

@NgModule({
	declarations: [RoomCardInfoComponent],
	imports: [CommonModule, CarouselModule, MatIconModule, RoomCardInfoRoutingModule],
	exports: [RoomCardInfoComponent],
})
export class RoomCardInfoModule {}
