import React from "react";
import { useState } from "react";

export default function Register(props) {

  const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      
  }
  return (props.trigger) ? (
    <section>

    <div className="form-box">
      <div className="form-value">
        <form onSubmit={handleSubmit} action="">
          <h2>Register</h2>

          <div className="inputbox">
          <ion-icon name="person-outline"></ion-icon>
          <input value={name} onChange={(e) => {setName(e.target.value)}} type="name"  required/>
          <label htmlFor="name">Name</label>
          </div>
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
          
          <div onClick={() => props.setTrigger(false)} className="close">
          <span></span>
          <span></span>
          </div>
          <button type="submit">Register</button>
          <div className="login-link">
          <p onClick={() => props.onFormSwitch('login')}>Already have a account? <a href="www.google.pl">Login here</a></p>

          </div>
          
        </form>
      </div>
    </div>
    </section>
  ) : ""
}