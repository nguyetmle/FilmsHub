import React, { useRef } from 'react'
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './SignUp.css'

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        // when a button is inside a form, it typically refresh, so this function prevents that to happen
        e.preventDefault(); //prevent default behaviors
        
        //authentication: sign up new users
        createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault(); //also to prevent a refresh

        //authentication: sign in existing users
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password'/>
                <button type='submit' onClick={signIn}>Sign In</button>

                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span> 
                    <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp