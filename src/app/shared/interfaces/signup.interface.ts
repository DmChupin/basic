export interface ISignUpReq {
	surname: string | null | undefined;
	name: string | null | undefined;
	password: string | null | undefined;
	male: string | null | undefined;
	dateOfBirth: string | null | undefined;
	email: string | null | undefined;
	notifications: boolean | null | undefined;
}

export interface ISignUpResp {
	token: string;
}
