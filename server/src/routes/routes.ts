import { Request, Response } from 'express';
import { loginAndFetchMetaData } from '../api/login';
import { getShoonyaOrderBook } from '../api/orderbook';
import { getShoonyaTradeBook } from '../api/tradebook';
import { decoratedRouter as router } from '../utils/router';

const BASE_ROUTE = '/api';

router.postAsync('/shoonya-login', async (req: Request, res: Response) => {
	const data = await loginAndFetchMetaData(req.body);
	res.status(200).send(data);
});

router.postAsync('/shoonya-orderbook', async (req: Request, res: Response) => {
	const { data, status } = await getShoonyaOrderBook(req.body);
	res.status(status).send(data);
});

router.postAsync('/shoonya-tradebook', async (req: Request, res: Response) => {
	const { data, status } = await getShoonyaTradeBook(req.body);
	res.status(status).send(data);
});

export default router.use(BASE_ROUTE, router);
