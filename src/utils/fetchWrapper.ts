export const request = async <TResponse>(url: string, config: RequestInit): Promise<TResponse> => {
	try {
		const response = await fetch(url, config);
		return await response.json();
	} catch (error) {
		console.log('Something went wrong. \n', error);
		throw new Error(error as string);
	}
};
