import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../nav/Nav'
import "./ProfileScreen.css"
import { selectUser } from '../../features/userSlice'
import { signOut } from 'firebase/auth'
import db, { auth } from '../../firebase/firebase'
import { collection } from 'firebase/firestore/lite'
import { setDoc, doc } from 'firebase/firestore/lite'
import { onSnapshot } from 'firebase/firestore'


function ProfileScreen() {
    const user = useSelector(selectUser); 
    const dbRef = collection(db, "users");


    const checkOut = async (num) => {
        var button = document.getElementById("subButton"+num);
        var buttons = document.getElementsByClassName('profileScreen__subButton');

        if (button.innerHTML==="Subscribe") {
            button.innerHTML = "Unsubscribe";
            for(var i=0; i<buttons.length; i++){
            if (buttons[i] !== button)
                buttons[i].disabled = true;
            }
        }
        else {
            button.innerHTML = "Subscribe";
            for(i=0; i<buttons.length; i++){
            if (buttons[i] !== button)
                buttons[i].disabled = false;
            }
        }

        for(i=0; i<buttons.length; i++){
            if (buttons[i].innerHTML === "Unsubscribe") {
                var plan = document.getElementById("plan"+(i+1));
                await setDoc(doc(dbRef,user.uid), {
                    subscription: plan.innerHTML
                });
            }
        }

        onSnapshot(dbRef, (snap) => {
            snap.data();
        })
        
    }

    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src='https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg' alt='' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>

                            <div className='profileScreen__plan'>
                                <div className='profileScreen__planDescription'>
                                    <h5 id='plan1'>Premium</h5>
                                    <h6>4k + HDR</h6>
                                </div>
                                <button onClick={()=>checkOut(1)} id='subButton1' className='profileScreen__subButton'>Subscribe</button>
                            </div>

                            <div className='profileScreen__plan'>
                                <div className='profileScreen__planDescription'> 
                                    <h5 id='plan2'>Standard</h5>
                                    <h6>1080p</h6>
                                </div>
                                <button onClick={()=>checkOut(2)} id='subButton2' className='profileScreen__subButton'>Subscribe</button>
                            </div>

                            <div className='profileScreen__plan'>
                                <div className='profileScreen__planDescription'>
                                    <h5 id='plan3'>Basic</h5>
                                    <h6>720p</h6>
                                </div>
                                <button onClick={()=>checkOut(3)} id='subButton3' className='profileScreen__subButton'>Subscribe</button>
                            </div>

                            <button className='profileScreen__signOut'
                                onClick={() => signOut(auth)}>Sign Out
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

    
}

export default ProfileScreen