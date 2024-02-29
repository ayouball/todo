import React, { useState } from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {

    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpClose = () => {
        setShowSignUp(false);
    };

    const containerStyle = {
        height: '100vh',
        backgroundImage: 'url("imgs/9.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={containerStyle}>
            <Login setShowSignUp={setShowSignUp}></Login>
            {showSignUp && (
                <SignUp handleSignUpClose={handleSignUpClose}></SignUp>
            )}
        </div>
    );
}

export default Auth;
