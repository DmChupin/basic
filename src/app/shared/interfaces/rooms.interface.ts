export interface IRoom {
	id: number;
	type: string;
	sleeps: number;
	price: number;
	facilities: string;
	freeCount: number;
	bookedCount: number;
	hotelId: number;
}
