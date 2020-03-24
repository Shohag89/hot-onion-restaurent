import React, { useState } from 'react';
import logo from './logo.svg';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './App.css';


firebase.initializeApp(firebaseConfig);

function App() {
  const[user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res =>{
      const {displayName,photoURL,email} =res.user;
      const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedInUser);
      console.log(displayName,photoURL,email);
    })
    .catch(error =>{
      console.log(error);
      console.log(error.message);

    })
  }
  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
      }
      setUser(signedOutUser);
      console.log(res);
    })
    .catch(error =>{

    })
  }
  const handleChange = event =>{
    const newUserInfo ={
      ...user
    };
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  }
  const createAccount = () =>{
    console.log(user.email, user.password)
  }
  return (
    <div className="App">
    <h1>Login</h1>
      {user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button>:
    <button onClick={handleSignIn}>Sign up</button>}
    {
      user.isSignedIn && <div>
         <p>Welcome, {user.name}</p>
         <p>Your email: {user.email}</p>
         <img src={user.photo} alt="" width='300px'/>
        </div>
    }
    <h1>Our Own Authentication</h1>
    <input type="text"onBlur={handleChange} name="email" placeholder="Your Email"/>
    <br/>
    <input type="password" onBlur={handleChange} name="password" placeholder="Your Password"/>
    <br/>
    <button onClick={createAccount}>Create Account</button>
    </div>
  );
}

export default App;
