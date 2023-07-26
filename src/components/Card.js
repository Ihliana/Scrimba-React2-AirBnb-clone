import React from "react"

import Star from "../images/star.png"

function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" alt="" />
            <div className="card--stats">
                <img src={Star} alt=""  className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) *  </span>
                <span className="gray">{ props.location}</span>
            </div>

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>

    )
}


export default Card