import React from "react";
import './content.css'
export default function ReverseContent(props) {
  return(
    <div className="rev">
      <div className="reverse-div">
    <img src={props.imgPath} alt="" />
  </div>
  <div className="reverse-text">
    <h1>{props.header}</h1>
    <p>{props.paragraph}</p>
  </div>
    </div>
  )
}