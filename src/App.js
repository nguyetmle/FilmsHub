import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/homescreen/HomeScreen';
import ProfileScreen from './components/profilescreen/ProfileScreen';
import Login from './components/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser); //give the user back from redux store

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //logged out
        dispatch(logout()) //reset the state.user to null in userSlice.js
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? ( // if there is no user, serve the login page
          <Login/>
        ): ( //else, serve the homescreen
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
