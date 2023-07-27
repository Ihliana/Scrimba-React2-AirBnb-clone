import React from "react"

import Star from "../images/star.png"

function Card(props){

    let badgeText 
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

        /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.img}`)} className="card--image" alt="" />
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