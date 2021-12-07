import { AuthCreds } from '../types/Common';
import { IOrderBook } from '../types/ShoonyaData';
import { request } from '../utils/fetchWrapper';

export const getShoonyaOrderBook = async ({ uid, jKey }: AuthCreds): Promise<{ data: IOrderBook[]; status: number }> => {
	try {
		const { data, status } = await request<IOrderBook[]>('https://shoonya.finvasia.com/NorenWClientWeb/OrderBook', {
			method: 'POST',
			headers: {
				'content-type': 'text/plain; charset=utf-8',
			},
			body: `jData={"uid":"${uid}","actid":"${uid}"}&jKey=${jKey}`,
		});

		return { data, status };
	} catch (err) {
		console.log('Something went wrong!\n', err);
		throw new Error(err as string);
	}
};
