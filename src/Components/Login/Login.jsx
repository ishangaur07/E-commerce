import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailGet = (event)=>{
       return setEmail(event.target.value);
    }

    const signIn = (e)=>{
        e.preventDefault();
        console.log("you clicked signin");
        // Some fancy firebase login
    }

    const register = (e)=>{
        e.preventDefault();
        console.log("you clicked to create");
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
