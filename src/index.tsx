import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import BackOffice from './components/BackOffice';

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider autoDismiss autoDismissTimeout={4000}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="back-office" element={<BackOffice />} />
				</Routes>
			</BrowserRouter>
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
