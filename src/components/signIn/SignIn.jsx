import React from "react";
import { useState } from "react";
import './signin.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
    const [email, setEmailLog] = useState('')
    const [password, setPasswordLog] = useState('')
    const [loginStatus, setLoginStatus] = useState('');
    let navigate = useNavigate();
    

    const sendLogin = () => {
        
      axios.post('http://localhost:3001/profile', {
        password: password,
        email: email,
        

      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message)
        } else {
          const name = response.data.map(a => a.fullName)
          navigate("/profile", {state:{name}});
        
          
        }
        
        
      })
    }

  const handleSubmit = (e) => {
      e.preventDefault();
      
  }


  return (props.trigger) ? (
    <section>

    <div className="form-box">
      <div className="form-value">
        <form onSubmit={handleSubmit} action="">
          <h2>Login</h2>
          <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
            <input value={email} onChange={(e) => {setEmailLog(e.target.value)}} type="email" required/>
            <label htmlFor="">Email</label>
          </div>
          <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
            <input value={password} onChange={(e) => {setPasswordLog(e.target.value)}} type="password" required/>
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor=""><input type="checkbox"/>Remember Me <a href="www.google.pl">Forget Password?</a></label>
            
          </div>
          <div>
            <p className="login-status">{loginStatus}</p>
          </div>

          <div onClick={() => props.setTrigger(false)} className="close">
          <span></span>
          <span></span>
          </div>
          <button onClick ={sendLogin} type="submit">Log In</button>
          <div className="register">
          <p onClick={() => props.onFormSwitch('register')}>Don't have a account <a href="www.google.pl">Register</a></p>

          </div>
        </form>
      </div>
    </div>
    </section>
  ) : "";
}