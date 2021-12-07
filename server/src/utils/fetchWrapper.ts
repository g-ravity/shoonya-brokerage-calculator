import fetch, { RequestInit } from 'node-fetch';

export const request = async <TResponse>(url: string, config: RequestInit): Promise<{ data: TResponse; status: number }> => {
	try {
		const response = await fetch(url, config);

		const data = (await response.json()) as TResponse;
		return { data, status: response.status };
	} catch (error) {
		console.log('Something went wrong. \n', error);
		throw new Error(error as string);
	}
};
