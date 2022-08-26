import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateProps {
	component: React.FC;
}

const Private = ({ component: Component }: PrivateProps) => {
	const { loggedIn } = useAuth();

	if (!loggedIn) {
		return <Navigate to="/login" state="you must be logged in" />;
	}

	return <Component />;
};

export default Private;
