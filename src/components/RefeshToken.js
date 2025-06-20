import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function RefeshToken({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        if (userInfo && userInfo.token) {
            setIsAuthenticated(true);
            if (location.pathname === '/login' || location.pathname === '/') {
                navigate('/dashboard');
            }
        }
    }, [navigate, location, setIsAuthenticated]);
    return null;
}
