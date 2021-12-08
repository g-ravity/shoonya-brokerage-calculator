import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { request } from '../utils/fetchWrapper';
import { Loader } from './Loader';
import { Box } from '../styledComponents/Box';
import useAuthorizedState from '../hooks/useAuthorizedState';
import { isNotEmptyObject } from '../utils/commonHelpers';
import { Button } from '../styledComponents/Button';

interface ILoginForm {
	userId: string;
	pan: string;
	password: string;
}

const App = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [authDetails, handleAuthChange] = useAuthorizedState();

	const { addToast } = useToasts();

	const navigate = useNavigate();
	const onLoginSubmit = async (values: ILoginForm) => {
		setLoading(true);

		try {
			const data = await request<{ accessToken?: string }>('/shoonya-login', {
				method: 'POST',
				body: JSON.stringify(values),
			});

			if (data.accessToken) {
				localStorage.setItem('shoonyaId', values.userId);
				localStorage.setItem('shoonyaToken', data.accessToken);

				addToast('Logged in successfully!', { appearance: 'success' });
				handleAuthChange({ shoonyaId: values.userId, shoonyaToken: data.accessToken });
			}
		} catch (err) {
			setLoading(false);
			addToast('Failed to Login. Please try again!', { appearance: 'error' });
		}

		navigate('/back-office');
	};

	useEffect(() => {
		if (isNotEmptyObject(authDetails)) navigate('/back-office');
		else setLoading(false);
	}, [authDetails]);

	return (
		<Box>
			{loading ? (
				<Loader />
			) : (
				<Login>
					<h2 style={{ marginBottom: '30px' }}>Shoonya Login</h2>

					<Formik initialValues={{ userId: '', password: '', pan: '' }} onSubmit={(values) => onLoginSubmit(values)}>
						{({ values, handleChange, handleSubmit }) => (
							<div>
								<form onSubmit={handleSubmit}>
									<Input name="userId" placeholder="User ID" onChange={handleChange} value={values.userId} required />
									<Input name="password" placeholder="Password" type="password" onChange={handleChange} value={values.password} required />
									<Input name="pan" placeholder="PAN" type="password" onChange={handleChange} value={values.pan} required />
									<Button type="submit">Login</Button>
								</form>
							</div>
						)}
					</Formik>
				</Login>
			)}
		</Box>
	);
};

const Login = styled.div`
	position: absolute;
	top: 20%;
	text-align: center;
`;

const Input = styled.input`
	border: 2px solid #ffffff;
	border-radius: 10px;
	min-height: 40px;
	width: 300px;
	display: block;
	background: none;
	font-family: 'Readex Pro', sans-serif;
	font-size: 1.2rem;
	padding: 10px;
	margin: 20px 0;

	:focus {
		outline: 0;
	}

	::placeholder {
		color: #e0a100;
		opacity: 1;
	}
`;

export default App;
