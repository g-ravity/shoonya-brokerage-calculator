import { AuthCreds } from '../types/Common';
import { ITradeBook } from '../types/ShoonyaData';
import { request } from '../utils/fetchWrapper';

export const getShoonyaTradeBook = async ({ uid, jKey }: AuthCreds): Promise<{ data: ITradeBook[]; status: number }> => {
	try {
		const { data, status } = await request<ITradeBook[]>('https://shoonya.finvasia.com/NorenWClientWeb/TradeBook', {
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
