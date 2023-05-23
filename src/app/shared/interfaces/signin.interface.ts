export interface ISignInReq {
	email: string | null;
	password: string | null;
}

export interface ISignInResp {
	token: string;
}
