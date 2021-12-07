import React, { useState } from 'react';

interface IAuthDetails {
	shoonyaToken?: string;
	shoonyaId?: string;
}

const useAuthorizedState = (): [IAuthDetails, (values: IAuthDetails) => void] => {
	const isAuthorized = localStorage.getItem('shoonyaId') && localStorage.getItem('shoonyaToken');

	const [authDetails, setAuthDetails] = useState<IAuthDetails>(
		isAuthorized
			? {
					shoonyaId: localStorage.getItem('shoonyaId') as string,
					shoonyaToken: localStorage.getItem('shoonyaToken') as string,
			  }
			: {},
	);

	const handleAuthStatusChange = (values: IAuthDetails): void => {
		setAuthDetails(values);
	};

	return [authDetails, handleAuthStatusChange];
};

export default useAuthorizedState;
