import React from "react";

export default function Detail(props){
    return(
        <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    )
}