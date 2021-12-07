export const request = async <TResponse>(url: string, config: RequestInit): Promise<{ data: TResponse; status: number }> => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
			...config,
			method: config.method || 'GET',
			headers: { ...(config.method === 'POST' ? { 'content-type': 'application/json' } : {}), ...config.headers },
		});

		const data = await response.json();
		return { data, status: response.status };
	} catch (error) {
		console.log('Something went wrong. \n', error);
		throw new Error(error as string);
	}
};
