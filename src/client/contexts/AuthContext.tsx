import React, { createContext, useReducer, useEffect } from 'react';
import LoaderCard from '../components/LoaderCard';
import { apiService } from '../services/apiService';

export const AuthContext = createContext<
	[
		typeof initialState | null,
		React.Dispatch<{
			type: string;
			payload?: any;
		}>
	]
>([null, () => {}]);

interface AuthProviderProps {
	children: React.ReactNode;
}

const initialState = { checking: true, loggedIn: false, error: '' };

const reducer = (state = initialState, action: { type: string; payload?: any }) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				checking: false,
				loggedIn: true
			};
		case 'LOGOUT':
			return {
				...state,
				loggedIn: false
			};
		case 'ERROR':
			return {
				...state,
				checking: false,
				error: action.payload
			};
		default:
			return state;
	}
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [auth, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		apiService('/auth/token/verify')
			.then(() => {
				dispatch({ type: 'LOGIN' });
			})
			.catch(() => {
				dispatch({ type: 'ERROR', payload: 'missing or expired token' });
			});
	}, []);

	if (auth.checking) {
		return <LoaderCard number={3} />;
	}

	return <AuthContext.Provider value={[auth, dispatch]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
