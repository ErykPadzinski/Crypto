import React from "react";
import { useState } from "react";
import './Home.css'
import Content from "../../components/content/Content";
import ReverseContent from "../../components/content/ReverseContent";
import SignIn from "../../components/signIn/SignIn";
import Register from "../../components/register/Register"

function Home() {

  const [loginPopup, setLoginPopup] = useState(false)
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <header>
      <div className="logo">
      <img src="images/logo-white.png" alt="logo" srcset="" />
    </div>
    {
      currentForm === 'login' ? <SignIn onFormSwitch={toggleForm} trigger={loginPopup} setTrigger={setLoginPopup} /> : <Register onFormSwitch={toggleForm} trigger={loginPopup} setTrigger={setLoginPopup} />
    }
      

    

      <ul className="menu">
        <li className="menu-nav">About Us</li>
        <li className="menu-nav">Prices</li>
        <li className="menu-nav">Contact</li>
      </ul>
      <button onClick={() => setLoginPopup(true)} className="sign-in" >Sign In</button>
      </header>
      <Content 
      imgPath="images/laptop.png"
      header="Make easier crypto trade with us"
      paragraph="With us you can easy manage your virtual wallet and make many transactions from anywhere you want."/>
      <ReverseContent
      imgPath ="images/stats.png"
      header = "We have been on the market since 2018"
      paragraph = "We have many years of experience in performing technical analyzes and minimizing risk"
      />
      <Content 
      imgPath="images/contact.png"
      header="We are always for you"
      paragraph="to make sure that your wallet is safe, you can contact with us 24/7"
      />

      
    </div>
  );
}

export default Home;
