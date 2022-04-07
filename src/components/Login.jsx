import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {Footer, Navigation} from "./index";
import GoogleLogin from "react-google-login";

function Login() {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );

    const handleFailure = (result) => {
        console.log(result);
    }

    console.log("test")
    
    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', { 
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId, 
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json();
        console.log(data)
        console.log("test")
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));

    }

    const handleLogout = () => {
      localStorage.removeItem('loginData');
      setLoginData(null);
    }
    return (
        <div>
            <Navigation />
            <div class = "center">
                {
                    loginData ? (
                        <div>
                        <h3>logged in</h3>
                        <button onClick={handleLogout}>logout</button>
                        </div>
                    ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    >
                    </GoogleLogin>
                    )}
            </div>
            <Footer />

        </div>
    );
}

export default Login;
