export const request = async <TResponse>(url: string, config: RequestInit): Promise<TResponse> => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
			...config,
			method: config.method || 'GET',
			headers: { ...(config.method === 'POST' ? { 'content-type': 'application/json' } : {}), ...config.headers },
		});

		if (response.status !== 200) throw new Error('Something went wrong!');
		else {
			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.log('Something went wrong. \n', error);
		throw new Error(error as string);
	}
};
