import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./profile.css"
import CryptoView from "../../components/cryptoView/CryptoView";

export default function Profile() {
  const location = useLocation();


  const [data, setData] = useState(null)

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(() => {
      axios.get(url).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error);
      })
    }, [])
    console.log(data);

    if(!data) return null

  
  return(
    <div>
      <div className="user-header">
      <img className="user-logo" src="images/logo-white.png" alt="logo" srcset="" />
      <p className="userName">Hello {location.state.name}</p>
      </div>
      <div className="content">
        <div className="resume-balance">
        <p className="total-balance">Total Balance</p>
        <p className="balance">123,456$</p>
        </div>
        <div className="coins">
        <CryptoView img={data[0].image} price={data[0].current_price} name={data[0].name} symbol={data[0].symbol} percentage={data[0].price_change_percentage_24h} />
        </div>
      </div>
    </div>
  )
}