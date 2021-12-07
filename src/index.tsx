import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import BackOffice from './components/BackOffice';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="back-office" element={<BackOffice />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
