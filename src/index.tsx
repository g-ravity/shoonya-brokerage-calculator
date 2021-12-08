import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import BackOffice from './components/BackOffice';
import Calculator from './components/Calculator';
import Graphs from './components/Graphs';
import Analytics from './components/Analytics';

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider autoDismiss autoDismissTimeout={4000}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="back-office" element={<BackOffice />} />
					<Route path="brokerage-calculator" element={<Calculator />} />
					<Route path="graphs" element={<Graphs />} />
					<Route path="analytics" element={<Analytics />} />
				</Routes>
			</BrowserRouter>
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
