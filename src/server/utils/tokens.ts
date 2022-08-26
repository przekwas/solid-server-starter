import jwt from 'jsonwebtoken';
import config from '../config';

export const signToken = (payload: IPayload): string => {
	try {
		const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expires });
		return token;
	} catch (error) {
		throw error;
	}
};

export const verifyToken = (token: string): IPayload => {
	try {
		const payload = jwt.verify(token, config.jwt.secret) as IPayload;
		return payload;
	} catch (error) {
		throw error;
	}
};

interface IPayload {
	userid: number;
	role: string;
}
