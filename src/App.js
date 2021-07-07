import React, { useState } from "react";
import "./App.css";


function App() {
  // previous and current are used in the displays, recentNum is a placeholder for the last number entered
  // usereducer used for doing the math operations, it does the recent entered math and keeps the subtotal
  // subtotal also holds the last math operation and takes care of equal and AllClear
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("0");
  const [recentNum, setRecentNum] = useState("");
  const [operator, setOperator] = useState("");
  const [subtotal2, setSubTotal2] = useState(0)

  const handleNumber = ({ target: { value } }) => {
    let pattern = new RegExp(/^-?\d+\.?\d*$/);
    //if calculator is in initial state, when current = 0 & recentNum is empty, then overwrite the zero
    //or also take care of when a number starts with a '-'
    //test new input is valid
    let str =
      current === "0" && recentNum === "" && value === "."
        ? current + value
        : current === "0" && recentNum === ""
        ? value
        : value === "-"
        ? value
        : current + value;

    if (pattern.test(str) || str === "-") {
      //test for initial state
      if (operator === "" && recentNum === "" && current === "0") {
        setCurrent(str);
         setRecentNum(str);
        // test for initial state after first zero
      } else if (
        operator === "" && recentNum === "0" && current === "0") {
        setCurrent((prev) => (value === "." ? prev + value : prev));
        setRecentNum((prev) => (value === "." ? prev + value : prev));
        //initial state after an equals was executed
        // disallow typing numbers AFTER an equal has been exectuted
      } else if (subtotal2.toString() === current && recentNum === "0") {
        return;
      } else {
        setCurrent((prev) => prev + value);
        setRecentNum((prev) => prev + value);
      }
    }
  };

  const ReplaceOperations = (fixing) => {
    console.log(fixing)
     return (
      fixing.replace(/[-/*+]\+/, "+")
    .replace(/[-+*/]\//, "/")
    .replace(/[-/+*]\*/, "*")
    .replace("--", "+").replace("+-", "-")
    )
  }

  const ClearAllCleanup = () => {
    setPrevious( "")
    setCurrent("0");
    setRecentNum( "");
    setSubTotal2(0)
    setOperator("")
    };

  const justDoIt = (operation) => {
        const operators = {
      "+": function (a, b) {return a + b},
      "-": function (a, b) {return a - b},
      "*": function (a, b) {return a * b},
      "/": function (a, b) {return a / b},
    };

    let subT = operators[operator](subtotal2, +recentNum);
    if (operation === "=") {
      setSubTotal2(subT);
      setOperator("=");
      setRecentNum("");
      setPrevious((prev) =>
        ReplaceOperations(prev + `${recentNum}${operation}${subT}`)
      );
      setCurrent(() => subT);
    } else {
      setSubTotal2(subT);
      setOperator(operation);
      setRecentNum("")
      setPrevious((prev) =>
        ReplaceOperations(prev + `${recentNum}${operation}`)
      );
      setCurrent(() => "");    
    }     
  } 
  
  const handleOperations = ({ target: { value } }) => {
  let pat =/[=+*/]/
    if (previous === "" ) {
      setSubTotal2(prev => prev + +recentNum)
      setOperator(value);
      setRecentNum("");
      setPrevious((prev) =>
              ReplaceOperations(prev + `${recentNum}${value}`)
            );
      setCurrent(() => "");
    } else if (pat.test(operator) && (recentNum === ""|| recentNum === "-")) {
     setPrevious(subtotal2 + value)
      setOperator(value);
     setCurrent(() => "");
     setRecentNum("")
    } else {
       justDoIt(value)
    }}

 const handleEqual =() => {
    if (recentNum ==="" && operator ==="") {
      return;
    } else if (recentNum !=="" && operator ===""){
      setPrevious(`${recentNum}=${recentNum}`)
    } else if (recentNum ==="" && operator !==""){
      setPrevious((prev) =>ReplaceOperations (prev + `${recentNum}=${subtotal2}`));
      setCurrent(() => `${subtotal2}`);
      setRecentNum(() => "0");
    } else {
      justDoIt("=")
    }
  }

  return (
    <div className='App'>
      {/* Used in development
      <br />
      <br />
      <br />
      subtotal {subtotal2}
      <br />
      Recent operation {operator} <br />
      Recent Number {recentNum} */}
      
      <div className='grid-container'>
        <div className='display display-main span-4'>{previous}</div>
        <div className='display display-second span-4' id='display'>
          {current}
        </div>
        <button className='function clear span-2' id='clear' onClick={ClearAllCleanup}>AC</button>
        <button className='function' id='divide' value='/' onClick={handleOperations}>/</button>
        <button className='function' id='multiply' value='*' onClick={handleOperations}>X</button>
        <button className='numbers' id='seven' value='7' onClick={handleNumber}>7</button>
        <button className='numbers' id='eight' value='8' onClick={handleNumber}>8</button>
        <button className='numbers' id='nine' value='9' onClick={handleNumber}>9</button>
        {/* ################################################## */}
        <button className='function' id='subtract' value='-'
          onClick={
            operator === "-" && recentNum === "-"
              ? ""
              : operator === "" || operator === "="|| recentNum !==""
              ? handleOperations
              : handleNumber
          }>
          -
        </button>
        {/* ################################################# */}
        <button className='numbers' id='four' value='4' onClick={handleNumber}>4</button>
        <button className='numbers five' id='five' value='5' onClick={handleNumber}>5</button>
        <button className='numbers six' id='six' value='6' onClick={handleNumber}>6</button>
        <button className='function add' id='add' value='+'
          onClick={handleOperations}>+</button>
        <button className='numbers one' id='one' value='1' onClick={handleNumber}>1</button>
        <button className='numbers two' id='two' value='2' onClick={handleNumber}>2</button>
        <button className='numbers three' id='three' value='3' onClick={handleNumber}>3</button>
        <button className='function equal span-2v' id='equals' value='=' onClick={handleEqual}>=</button>
        <button className='numbers zero span-2' id='zero' value='0' onClick={handleNumber}>0</button>
        <button className='numbers decimal' id='decimal' value='.' onClick={handleNumber}>.</button>
      </div>
    </div>
  );
}

export default App;
