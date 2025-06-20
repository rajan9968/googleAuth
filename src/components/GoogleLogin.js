import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { loginWithGooogle } from '../Api/Loginapi';
import { useNavigate } from 'react-router-dom';

export default function GoogleLogin() {

    const navigate = useNavigate();
    const googleresponse = async (authResult) => {
        try {
            if (authResult['code']) {
                const result = await loginWithGooogle(authResult['code']);
                const { user, token } = result.data;

                const obj = {
                    username: user.username,
                    email: user.email,
                    Image: user.Image,
                    _id: user._id,
                    token
                };
                localStorage.setItem('user-info', JSON.stringify(obj));
                navigate('/dashboard');



            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }


    const googleLogin = useGoogleLogin({
        onSuccess: googleresponse,
        onError: googleresponse,
        flow: 'auth-code',
    })
    return (
        <div>
            <button onClick={googleLogin}>Login With Google</button>
        </div>
    )
}
