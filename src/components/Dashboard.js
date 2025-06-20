import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user-info');
        navigate('/login');
    };
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            {userInfo && (
                <div>
                    <h2>{userInfo.username}</h2>
                    <p>{userInfo.email}</p>
                    <img src={userInfo.Image} alt="User" />
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            )}
            {!userInfo && <p>Please log in to see your dashboard.</p>}
        </div>
    )
}
