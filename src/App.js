import React from "react"
import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />

      <Card 
        img='http://localhost:3001/static/media/katie-zaferes.8c39a93af3d2de2b3c27.png'
        rating="5.0"
        reviewCount = {6}
        country="USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
        />

    </div>
  );
}

export default App;
