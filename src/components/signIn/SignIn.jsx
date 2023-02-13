import React from "react";
import './signin.css'
export default function SignIn(props) {
  return (props.trigger) ? (
    <section>

    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2>Login</h2>
          <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required/>
            <label htmlFor="">Email</label>
          </div>
          <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required/>
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor=""><input type="checkbox"/>Remember Me <a href="www.google.pl">Forget Password?</a></label>
            
          </div>
          <div onClick={() => props.setTrigger(false)} className="close">
          <span></span>
          <span></span>
          </div>
          <button>Log In</button>
          <div className="register">
          <p>Don't have a account <a href="www.google.pl">Register</a></p>

          </div>
        </form>
      </div>
    </div>
    </section>
  ) : "";
}