import express from 'express';

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		res.json('post register');
	} catch (error) {
		next(error);
	}
});

export default router;