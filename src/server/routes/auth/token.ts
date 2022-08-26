import express from 'express';
import { checkToken } from '../../middlewares';

const router = express.Router();

router.get('/verify', checkToken, async (req, res, next) => {
	try {
		res.json({ message: 'ok' });
	} catch (error) {
		next(error);
	}
});

export default router;