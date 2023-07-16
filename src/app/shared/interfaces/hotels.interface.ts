import { IFacility } from './facility.interface';

export interface IHotel {
	id: number;
	name: string;
	price: number;
	description: string;
	rating: number;
	square: number;
	image: string;
	facilities: IFacility[] | [] | undefined;
}
