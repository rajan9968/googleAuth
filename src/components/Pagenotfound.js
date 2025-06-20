import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pagenotfound() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Page Not Found</h2>
            <button onClick={() => navigate('/login')} >Login</button>
        </div>
    )
}
