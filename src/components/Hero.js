import React from "react"

import PGrid from '../images/photo-grid.png'

function Hero(){
    return(

        <section className="hero">
            <img src={PGrid} alt="collection of photos in a grid" className="hero--photo"/>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>

        </section>
    )
}

export default Hero