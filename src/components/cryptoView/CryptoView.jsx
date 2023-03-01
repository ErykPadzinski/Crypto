import React from "react";
import "./cryptoview.css"

export default function CryptoView(props) {
  return(
    <div className="coin-view">
      <div className=" coin-header">
        <img className="coin-img" src={props.img} alt="" />
        <div className="coin-title">
        <p className="coin-name">{props.name}</p>
        <p className="coin-symbol">{props.symbol}</p>
        </div>
      </div>
        <p className="coin-price" >${props.price}</p>
          <p>{props.percentage.toFixed(2)}%</p>
    </div>
  )
}