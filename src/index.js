import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ProSidebarProvider} from 'react-pro-sidebar';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProSidebarProvider>
				<App />
			</ProSidebarProvider>
		</BrowserRouter>
	</React.StrictMode>
);
