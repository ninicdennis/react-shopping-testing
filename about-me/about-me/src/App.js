import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className ='header'>
        <div className ='about'><h1>About Dennis Ninic</h1></div>
        <div className = 'column'>
        <div className ='intro'><h2>Introduction</h2>
        <div>
          <p>
            Hello, my name is Dennis and I have been wanting to program for a little while now,
            but while working full time, I have had zero time to actually get started. This lead
            me further and further away from my actual goal, which was to build Free and Open Source
            software. It was bringing me down a lot until my boss Cameron told me about Helio. I 
            then decided that I would step down and give it a shot. And here I am making a very
            barebones website made in React.JS.
          </p>
        </div>
        </div>
        <div className ='helio'><h2>Reasons for taking Helio Training</h2>
           <div>
          <p>
            A couple reasons I took Helio are as follows:
            <ul>
              <li>Absolute Flexible training and being after hours.</li>
              <li>Full reimbursement if you complete both courses and do not get a job.</li>
              <li>Smaller Classes for a more interactive experience.</li>
            </ul>
            ...and so much more!
          </p>
        </div>
        </div>
        <div className ='intrests'><h2>Intrests</h2> 
          <div>
          Here are a couple of my intrests:
          <ul>
            <li> I love messing around in Linux, as well as writing some simple bash scripts.</li>
            <li> "Investing" in lots of audio equipment, specifically in headphones.</li>
            <li> Reading technology based forums.</li>
          </ul>
        </div>
        </div>
        </div>
        </header>

      </div>
    );
  }
}

export default App;
