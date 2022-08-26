export {};

declare global {
	namespace Express {
		export interface User {
			id: number;
			role: string;
		}
		
		interface Request {
			payload?: {
				userid: number;
				role: string;
				iat: number;
				exp: number;
			}
		}
	}
}
