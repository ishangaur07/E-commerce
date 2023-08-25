import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import firebase from '../../Firebase';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const emailGet = (event)=>{
       return setEmail(event.target.value);
    }

    const signIn =  async(e)=>{
        e.preventDefault();
        console.log("you clicked signin");
        // Some fancy firebase login
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password).then((auth)=>{
                console.log(auth);
                navigate("/checkout");
            })
        }catch(error){
            console.log(error.message);
        }
    }

    const register = async (e)=>{
        e.preventDefault();
        console.log("you clicked to create");
        
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then((auth)=>{
                console.log(auth);
                if(auth){
                    navigate("/")
                }
            });
            console.log('User registered successfully');
          } catch (error) {
            console.error('Error during signup:', error.message);
          }
        
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo' />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="email" 
                    name="email" 
                    autoComplete='username'
                    value={email} onChange={emailGet} />
                    
                    <h5>Password</h5>
                    <input 
                    type="password" 
                    name="password" 
                    autoComplete='current-password'
                    value={password} onChange={e=>setPassword(e.target.value)} />
                    
                    <button
                     type='submit' onClick={signIn} 
                    className='login_siginButton'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button
                onClick={register}
               className='login_register'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;
