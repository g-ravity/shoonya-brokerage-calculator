import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import useAuthorizedState from '../hooks/useAuthorizedState';
import { Box } from '../styledComponents/Box';
import { Button } from '../styledComponents/Button';
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
		try {
			const data = await request('/shoonya-orderbook', {
				method: 'POST',
				body: JSON.stringify({ uid: authDetails.shoonyaId, jKey: authDetails.shoonyaToken }),
			});
		} catch (err) {
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
				<div style={{ width: '60%', textAlign: 'center' }}>
					<h3>Welcome to Shoonya Back Office</h3>
					<ButtonContainer>
						<Link to="/brokerage-calculator">
							<Button>Calculator</Button>
						</Link>
						<Link to="/graphs">
							<Button>Graphs</Button>
						</Link>
						<Link to="/analytics">
							<Button>Analytics</Button>
						</Link>
					</ButtonContainer>
				</div>
			)}
		</Box>
	);
};

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 30px 0;
`;

export default BackOffice;
