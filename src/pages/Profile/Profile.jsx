import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./profile.css"

export default function Profile() {
  const location = useLocation();


  const [data, setData] = useState(null)

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(() => {
      axios.get(url).then((response) => {
        setData(response)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  console.log(data);

  return(
    <div>
      <div className="user-header">
      <img className="user-logo" src="images/logo-white.png" alt="logo" srcset="" />
      <p className="userName">Hello {location.state.name}</p>
      </div>
      <div className="content">
        <p>Total Balance</p>
        <p>123,456$</p>
        <div className="coins">
        
        </div>
      </div>
    </div>
  )
}