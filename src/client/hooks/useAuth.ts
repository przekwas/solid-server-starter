import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
    const [state, dispatch] = useContext(AuthContext);

    return {
        loggedIn: state?.loggedIn,
        error: state?.error
    }
}