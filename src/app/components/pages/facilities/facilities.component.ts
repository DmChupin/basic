import { Component, Input, OnInit } from '@angular/core';
import { FacilitiesStoreService } from 'src/app/shared/services/facilities/facilities-store.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-facilities',
	templateUrl: './facilities.component.html',
	styleUrls: ['./facilities.component.less'],
	standalone: true,
	imports: [NgIf, MatListModule, NgFor, MatIconModule, AsyncPipe],
})
export class FacilitiesComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: FacilitiesStoreService) {}

	readonly facilities$ = this.service.facilities$;

	ngOnInit(): void {
		this.service.loadFacilities({ hotelId: this.hotelId });
	}
}
