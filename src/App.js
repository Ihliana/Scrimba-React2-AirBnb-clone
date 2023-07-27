import React from "react"
import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

function App() {

    let cards = data.map((course) => (
            <Card 
              key={course.id}
              course = {course}
                        /> ))
                        
  return (
    <div className="App">

      <Navbar />
      <Hero />
        <section className="cards-list">
          {cards}
        </section>

    </div>
  );
}

export default App;
