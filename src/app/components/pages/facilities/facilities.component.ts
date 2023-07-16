import { Component, Input, OnInit } from '@angular/core';
import { IFacility } from 'src/app/shared/interfaces/facility.interface';
import { FacilitiesService } from 'src/app/shared/services/facilities/facilities.service';

@Component({
	selector: 'app-facilities',
	templateUrl: './facilities.component.html',
	styleUrls: ['./facilities.component.less'],
})
export class FacilitiesComponent implements OnInit {
	@Input()
	hotelId!: number;

	constructor(private readonly service: FacilitiesService) {}

	facilities: IFacility[] = [];

	ngOnInit(): void {
		this.getFacilities();
	}

	getFacilities() {
		this.service.getFacilities({ hotelId: this.hotelId }).subscribe(facilities => (this.facilities = facilities));
	}
}
