import React from "react"
import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

import data from "./data"

function App() {

    let cards = data.map((course) => (
            <Card 
              key={course.id}
              img={course.coverImg}
              rating={course.stats.rating}
              reviewCount = {course.stats.reviewCount}
              location={course.location}
              title = {course.title}
              price = {course.price}
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
