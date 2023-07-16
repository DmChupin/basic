import { ISignUpReq } from './signup.interface';

export interface IReview {
	id: number;
	hotelId: number;
	userId: number;
	rating: number;
	text: string;
	user: ISignUpReq;
}
