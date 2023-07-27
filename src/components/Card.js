import React from "react"

import Star from "../images/star.png"

function Card(props){

    let badgeText 
    if(props.course.openSpots === 0){

        badgeText = "SOLD OUT"

    } else if (props.course.location === "Online"){

        badgeText = "ONLINE"
    }

           
    /*
    Challenge: Fix our component! 😱
    */


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.course.coverImg}`)} className="card--image" alt="" />
            <div className="card--stats">
                <img src={Star} alt=""  className="card--star" />
                <span>{props.course.stats.rating}</span>
                <span className="gray">({props.course.stats.reviewCount}) *  </span>
                <span className="gray">{ props.course.location}</span>
            </div>

            <p>{props.course.title}</p>
            <p><span className="bold">From ${props.course.price}</span> / person</p>
        </div>

    )
}


export default Card