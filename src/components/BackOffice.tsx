import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthorizedState from '../hooks/useAuthorizedState';
import { Box } from '../styledComponents/Box';
import { isNotEmptyObject } from '../utils/commonHelpers';
import { Loader } from './Loader';

const BackOffice = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [authDetails] = useAuthorizedState();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isNotEmptyObject(authDetails)) navigate('/');
		else setLoading(false);
	}, []);

	return <Box>{loading ? <Loader /> : 'Welcome to your Back Office'}</Box>;
};

export default BackOffice;
