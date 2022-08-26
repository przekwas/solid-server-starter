import passport from 'passport';
import PassportLocal from 'passport-local';
import PassportJWT from 'passport-jwt';
import db from '../db';
import config from '../config';
import { comparePasswords } from '../utils';

passport.use(
	new PassportLocal.Strategy(
		{
			usernameField: 'email',
			session: false
		},
		async (email, password, done) => {
			try {
				const [user] = (await db.users.find('email', email)) as [{ password?: string }];
				if (!user) {
					throw new Error('email or password incorrect');
				}

				const compared = await comparePasswords(password, user.password!);
				if (!compared) {
					throw new Error('email or password incorrect');
				}

				delete user.password;
				done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);

passport.use(
	new PassportJWT.Strategy(
		{
			jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.jwt.secret
		},
		(payload, done) => {
			done(null, payload);
		}
	)
);
