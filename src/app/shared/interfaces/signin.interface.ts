export interface ISignInReq {
	email: string | null;
	password: string | null;
	fullname: string | null;
}

export interface ISignInResp {
	token: string;
}
