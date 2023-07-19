import { Component, Input, OnInit } from '@angular/core';
import { FacilitiesStoreService } from 'src/app/shared/services/facilities/facilities-store.service';

@Component({
	selector: 'app-facilities',
	templateUrl: './facilities.component.html',
	styleUrls: ['./facilities.component.less'],
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
