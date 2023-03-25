import React, { useState } from 'react'
import './Login.css'
import SignUp from '../signup/SignUp';

function Login() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <img className='loginScreen__logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt=''/>
                <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
                <div className='loginScreen__gradient'></div>
            </div>

            <div className='loginScreen__body'>
                {signIn ? (
                    <SignUp/>
                ) : (
                <>
                    <h1>Unlimited films, TV programmes, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <div className='loginScreen__input'>
                        <form>
                            <button
                                onClick={() => setSignIn(true)}
                                className='loginScreen__getStarted'>GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default Login