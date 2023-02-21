import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register(props) {
  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const sendRegister = () => {

    axios.post('http://localhost:3001/register', {
      fullName: name,
      password: pass,
      email: email,
    }).then((response) => {
      
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
          <button onClick={sendRegister} type="submit">Register</button>
          <div className="login-link">
          <p onClick={() => props.onFormSwitch('login')}>Already have a account? <a href="www.google.pl">Login here</a></p>

          </div>
          
        </form>
      </div>
    </div>
    </section>
  ) : ""
}