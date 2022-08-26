import express from 'express';
import { checkLogin } from '../../middlewares';
import { signToken } from '../../utils';

const router = express.Router();

router.post('/', checkLogin, async (req, res, next) => {
	try {
		const token = signToken({ userid: req.user!.id, role: req.user!.role });
		res.json({ message: 'login successful', token });
	} catch (error) {
		next(error);
	}
});

export default router;