import React from "react";

export default function CryptoView(props) {
  return(
    <div>
      <div>
        <img src={props.img} alt="" />
      </div>
        <p>{props.price}</p>
    </div>
  )
}