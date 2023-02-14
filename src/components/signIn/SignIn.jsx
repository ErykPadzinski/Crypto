import React from "react";
import { useState } from "react";
import './signin.css'
export default function SignIn(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      
  }


  return (props.trigger) ? (
    <section>

    <div className="form-box">
      <div className="form-value">
        <form onSubmit={handleSubmit} action="">
          <h2>Login</h2>
          <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" required/>
            <label htmlFor="">Email</label>
          </div>
          <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
            <input value={pass} onChange={(e) => {setPass(e.target.value)}} type="password" required/>
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor=""><input type="checkbox"/>Remember Me <a href="www.google.pl">Forget Password?</a></label>
            
          </div>
          <div onClick={() => props.setTrigger(false)} className="close">
          <span></span>
          <span></span>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
          <p onClick={() => props.onFormSwitch('register')}>Don't have a account <a href="www.google.pl">Register</a></p>

          </div>
        </form>
      </div>
    </div>
    </section>
  ) : "";
}