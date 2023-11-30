import { Component, Input } from '@angular/core';
import { IHotel } from 'src/app/shared/interfaces/hotels.interface';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-room-card',
	templateUrl: './room-card.component.html',
	styleUrls: ['./room-card.component.less'],
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink, MatDividerModule],
})
export class RoomCardComponent {
	@Input() hotel!: IHotel;
}
