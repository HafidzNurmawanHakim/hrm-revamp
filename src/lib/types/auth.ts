export interface User {
	[key: string]: any;
	token: {
		token: string;
		identifier: string;
		refreshToken: string;
		type: string;
	};
}
