import React, { useEffect, useState, useReducer } from "react";
import "./App.css";

const initialState = {
  countAcc: 0,
  recOper: "",
};
const reducer = (state, action) => {
  const operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };
  switch (action.type) {

    case "divide":
      return {
        countAcc:
          state.recOper === ""
            ? state.countAcc + action.value
            : operators[state.recOper](state.countAcc, action.value),
        recOper: "/",
      };
    case "multiply":
      return {
        countAcc:
          state.recOper === ""
            ? state.countAcc + action.value
            : operators[state.recOper](state.countAcc, action.value),
        recOper: "*",
      };
    case "subtract":
      return {
        countAcc:
          state.recOper === ""
            ? state.countAcc + action.value
            : operators[state.recOper](state.countAcc, action.value),
        recOper: "-",
      };
    case "add":
      return {
        countAcc:
          state.recOper === ""
            ? state.countAcc + action.value
            : operators[state.recOper](state.countAcc, action.value),
        recOper: "+",
      };
    case "equals":
      return {
        countAcc: operators[state.recOper](state.countAcc, action.value),
        recOper: "",
      };
    case "erase":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // previous and current are used in the displays, recentNum is a placeholder for the last number entered
  // usereducer used for doing the math operations, it does the recent entered math and keeps the subtotal
  // subtotal also holds the last math operation and takes care of equal and AllClear
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("0");
  const [recentNum, setRecentNum] = useState("");
  const [subtotal, dispatch] = useReducer(reducer, initialState);

  const handleNumber = ({ target: { value } }) => {
    let pattern = new RegExp(/^-?\d+\.?\d*$/);
    //if calculator is in initial state, when current = 0 & recentNum is empty, then overwrite the zero
    //or also take care of when a number starts with a '-'
    //test new input is valid
    let str =
      current === "0" && recentNum === ""
        ? value
        : value === "-"
        ? value
        : current + value;
    if (pattern.test(str) || str === "-") {
      //test for initial state
      if (subtotal.recOper === "" && recentNum === "" && current === "0") {
        setCurrent(() => value);
        setRecentNum(() => value);
        // test for initial state after first zero
      } else if (
        subtotal.recOper === "" &&
        recentNum == "0" &&
        current == "0"
      ) {
        setCurrent((prev) => (value === "." ? prev + value : prev));
        setRecentNum((prev) => (value === "." ? prev + value : prev));
        //initial state after an equals was executed
        // disallow typing numbers AFTER an equal has been exectuted
      } else if (
        subtotal.countAcc.toString() === current &&
        recentNum === "0" 
      ) {
        return;
      } else {
        setCurrent((prev) => prev + value);
        setRecentNum((prev) => prev + value);
      }
      // ReplaceOperations();
    }
  };

  useEffect(() => {
    //  If AC, clear all
    if (subtotal.recOper === "" && subtotal.countAcc === 0) {
      setPrevious(() => "");
      ClearAllCleanup();

      //if equal, add "" and total to end of previous display,"" is flag
    } else if (subtotal.recOper === "" && subtotal.countAcc !== "") {
      setPrevious((prev) => prev + `${recentNum}=${subtotal.countAcc}`);
      setCurrent(() => `${subtotal.countAcc}`);
      setRecentNum(() => "0");
      console.log(current);
      console.log(typeof current);

      // this is for operations AFTER the equal has been done
    } else if (subtotal.recOper !== "" && recentNum === "0") {
      setPrevious(`${subtotal.countAcc}${subtotal.recOper}`);
      setCurrent(() => "");
      setRecentNum(() => "");
    } else {
      //normal operation, when numbers operations added to previous
      setPrevious((prev) => prev + `${recentNum}${subtotal.recOper}`);
      setCurrent(() => "");
      setRecentNum(() => "");
    }
  }, [subtotal]);

  useEffect(() => {
    ReplaceOperations();
  }, [previous]);

  const ReplaceOperations = () => {
    setPrevious(
      previous.replace(/[-/*]\+/, "+").replace(/[-+*]\//, "/").replace(/[-/+]\*/, "*")
    );
  }

  const ClearAllCleanup = () => {
    setCurrent(() => "0");
    setRecentNum(() => "");
    console.log(current);
    console.log(typeof current);
  };

  const SignSwitchTest =() => {
    return (subtotal.recOper === "-" || subtotal.recOper === "+") ? 0 : 1;
  }

  return (
    <div className='App'>
      <br />
      <br />
      <br />
      Cumul {subtotal.countAcc}
      <br />
      Recent operation {subtotal.recOper} <br />
      Recent Number {recentNum}
      <div className='grid-container'>
        <div className='display display-main span-4'>{previous}</div>
        <div className='display display-second span-4' id='display'>
          {current}
        </div>
        <button
          className='function clear span-2'
          id='clear'
          onClick={
            previous ? () => dispatch({ type: "erase" }) : ClearAllCleanup
          }>
          AC
        </button>
        <button
          className='function'
          id='divide'
          onClick={
            recentNum === ""
              ? () => dispatch({ type: "divide", value: SignSwitchTest() })
              : () =>
                  dispatch({
                    type: "divide",
                    value: recentNum === "0" ? 0 : +current,
                  })
          }>
          /
        </button>
        <button
          className='function'
          id='multiply'
          onClick={
            recentNum === ""
              ? () => dispatch({ type: "multiply", value: SignSwitchTest() })
              : () =>
                  dispatch({
                    type: "multiply",
                    value: recentNum === "0" ? 0 : +current,
                  })
          }>
          X
        </button>
        <button className='numbers' id='seven' value='7' onClick={handleNumber}>
          7
        </button>
        <button className='numbers' id='eight' value='8' onClick={handleNumber}>
          8
        </button>
        <button className='numbers' id='nine' value='9' onClick={handleNumber}>
          9
        </button>
        {/* ################################################################# */}
        <button
          className='function'
          id='subtract'
          value='-'
          onClick={
            recentNum === ""
              ? handleNumber
              : () =>
                  dispatch({
                    type: "subtract",
                    value: recentNum === "0" ? 0 : +current,
                  })
          }>
          -
        </button>
        {/* ################################################################# */}
        <button className='numbers' id='four' value='4' onClick={handleNumber}>
          4
        </button>
        <button
          className='numbers five'
          id='five'
          value='5'
          onClick={handleNumber}>
          5
        </button>
        <button
          className='numbers six'
          id='six'
          value='6'
          onClick={handleNumber}>
          6
        </button>
        <button
          className='function add'
          id='add'
          onClick={
            recentNum === ""
              ? () => dispatch({ type: "add", value: SignSwitchTest() })
              : () =>
                  dispatch({
                    type: "add",
                    value: recentNum === "0" ? 0 : +current,
                  })
          }>
          +
        </button>
        <button
          className='numbers one'
          id='one'
          value='1'
          onClick={handleNumber}>
          1
        </button>
        <button
          className='numbers two'
          id='two'
          value='2'
          onClick={handleNumber}>
          2
        </button>
        <button
          className='numbers three'
          id='three'
          value='3'
          onClick={handleNumber}>
          3
        </button>
        <button
          className='function equal span-2v'
          id='equals'
          value='='
          onClick={() =>
            subtotal.recOper && dispatch({ type: "equals", value: +current })
          }>
          =
        </button>
        <button
          className='numbers zero span-2'
          id='zero'
          value='0'
          onClick={handleNumber}>
          0
        </button>
        <button
          className='numbers decimal'
          id='decimal'
          value='.'
          onClick={handleNumber}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;
