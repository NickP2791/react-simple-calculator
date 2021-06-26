import React, { useState } from 'react'
import './App.css';

function App() {
const [previous, setPrevious] = useState('')  
const [current, setCurrent] = useState('')


  return (
    <div className="App">
      <div className="grid-container">
            <div className="display display-main span-4">34555</div>
            <div className="display display-second span-4">876767</div>
            <div className="btn function clear span-2" id="clear">AC</div>
            <div className="btn function divide" id="divide">/</div>
            <div className="btn function multiply" id="multiply">X</div>
            <div className="btn numbers seven" id="seven">7</div>
            <div className="btn numbers eight" id="eight">8</div>
            <div className="btn numbers nine" id="nine">9</div>
            <div className="btn function subtract" id="subtract">-</div>
            <div className="btn numbers four" id="four">4</div>
            <div className="btn numbers five" id="five">5</div>
            <div className="btn numbers six" id="six">6</div>
            <div className="btn function add" id="add">+</div>
            <div className="btn numbers one" id="one">1</div>
            <div className="btn numbers two" id="two">2</div>
            <div className="btn numbers three" id="three">3</div>
            <div className="btn function equal span-2v" id="equal">=</div>
            <div className="btn numbers zero span-2" id="zero">0</div>
            <div className="btn numbers decimal" id="decimal">.</div>
            

        </div>

      </div>

  );
}

export default App;
