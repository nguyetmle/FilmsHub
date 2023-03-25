import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false); 

    const navigate = useNavigate(); 
    // useNavigate() hook accesses the ReactRouter history object and navigates to the other routers 
    // using push or replace methods. With this hook, you could navigate to the specific URL 
    // and move forward and backward pages with ease.

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll",transitionNavBar); //as we scroll, trigger the transitionNavBar
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, []);


    return (
        // only add nav__black class if show variable is true 
        <div className={`nav ${show && "nav__black"}`}>  
            <div className='nav__content'>
                <img className='nav__logo' 
                    onClick={() => navigate('/')} //click on the logo would redirect to '/' route
                    src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' 
                    alt=''
                />
                <img className='nav__avatar' 
                    onClick={() => navigate('/profile')} //click on the avatar would redirect to '/profile' route
                    src='https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg' 
                    alt=''
                />
            </div>     
        </div>

    )
}

export default Nav