import React from "react";
import './content.css'


export default function Content(props) {
  return (
    <div className="con">

    <div className="div-img">
    <img src={props.imgPath} alt="" srcset="" />
  </div>
  <div className="text">
    <h1>{props.header}</h1>
    <p>{props.paragraph}</p>
  </div>
    </div>
  )
}