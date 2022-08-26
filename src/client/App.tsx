import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Private from './components/Private';

import AuthProvider from './contexts/AuthContext';

import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';

interface AppProps {}

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Private component={Profile} />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
