import express from 'express';
import passport from 'passport';

interface StatusError extends Error {
	status?: number;
}

export const notFoundHandler = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	const error = new Error(`${req.method} ${req.originalUrl} not found`) as StatusError;
	error['status'] = 404;
	next(error);
};

export const globalErrorHandler = (
	error: StatusError,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	console.error(error);
	res.status(error['status'] || 500);
	res.json({ error: error.message });
};

export const checkLogin = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
		if (err) {
			next(err);
		}

		if (info) {
			next(info);
		}

		req.user = user;
		next();
    })(req, res, next);
}

export const checkToken = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	passport.authenticate('jwt', { session: false }, (err, user, info) => {
		if (err) {
			next(err);
		}

		if (info) {
			next(info);
		}

		req.payload = user;
		next();
	})(req, res, next);
};