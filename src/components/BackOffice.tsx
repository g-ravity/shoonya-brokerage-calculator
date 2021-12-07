import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import useAuthorizedState from '../hooks/useAuthorizedState';
import { Box } from '../styledComponents/Box';
import { isNotEmptyObject } from '../utils/commonHelpers';
import { request } from '../utils/fetchWrapper';
import { Loader } from './Loader';

const BackOffice = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [authDetails, handleAuthChange] = useAuthorizedState();
	const navigate = useNavigate();
	const { addToast } = useToasts();

	useEffect(() => {
		if (!isNotEmptyObject(authDetails)) navigate('/');
		else setLoading(false);
	}, [authDetails]);

	const fetchOrderBook = async () => {
		const { data, status } = await request('http://localhost:8080/api/shoonya-orderbook', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ uid: authDetails.shoonyaId, jKey: authDetails.shoonyaToken }),
		});

		if (status === 401) {
			addToast('Authorization failed. Please login again!', { appearance: 'error' });
			localStorage.clear();
			handleAuthChange({});
		}
	};

	return (
		<Box>
			{loading ? (
				<Loader />
			) : (
				<>
					<h3>Welcome to Shoonya Back Office</h3>
					<button type="button" onClick={fetchOrderBook}>
						OrderBook
					</button>
					<button type="button">TradeBook</button>
				</>
			)}
		</Box>
	);
};

export default BackOffice;
