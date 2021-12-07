import { Request, Response } from 'express';
import { loginAndFetchMetaData } from '../api/login';
import { decoratedRouter as router } from '../utils/router';

const BASE_ROUTE = '/api';

router.postAsync('/shoonya-login', async (req: Request, res: Response) => {
	const data = await loginAndFetchMetaData(req.body);
	res.send(data).status(200);
});

export default router.use(BASE_ROUTE, router);
