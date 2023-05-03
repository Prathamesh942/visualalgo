import React, { useState, useEffect, useRef } from "react";
import Bubblesort from "./components/sorting/Bubblesort";
import Insertionsort from "./components/sorting/Insertionsort";
import Mergesort from "./components/sorting/Mergesort";
import Quicksort from "./components/sorting/Quicksort";
import Selectionsort from "./components/sorting/Selectionsort";
import ArrayBars from "./components/sorting/ArrayBars";
import "./styles.css";

function Sorting() {
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(500);
  const [input, setinput] = useState("");
  const ARRAY_SIZE = 8;
  const MIN_VALUE = 5;
  const MAX_VALUE = 500;

  const inputRef = useRef(null);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray(newArray);
  };

  const arrayupdater = () => {
    const newarray = [];
    const inputtedarray = input;
    let s = 0;
    let e = s;
    while (s < inputtedarray.length && e < inputtedarray.length) {
      if (inputtedarray[s] === " ") {
        s++;
      } else {
        if (inputtedarray[e] !== " ") {
          e++;
          if (e === inputtedarray.length) {
            let num = "";
            for (let k = s; k < e; k++) {
              num += inputtedarray[k];
            }
            let number = parseInt(num);
            if (number > 500) {
              number = 500;
            }
            newarray.push(number);
            s = e + 1;
            e = s;
          }
        } else {
          let num = "";
          for (let k = s; k < e; k++) {
            num += inputtedarray[k];
          }
          let number = parseInt(num);
          if (number > 500) {
            number = 500;
          }
          newarray.push(number);
          s = e + 1;
          e = s;
        }
      }
    }
    setArray(newarray);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setinput(inputRef.current.value);
    arrayupdater();
    e.target.reset();
  };

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray(newArray);
  }, []);

  return (
    <div>
      <div className="header">
        <a href="/">
          <h1 className="title">Algorithm Visualizer</h1>
        </a>
      </div>
      <div className="container">
        <div className="left-container">
          <ArrayBars array={array} />
        </div>
        <div className="right-container">
          {/* <div className="code">{MyCoolCodeBlock("")}</div> */}
        </div>
      </div>

      <div className="generator">
        <form onSubmit={handleClick}>
          <input
            className="forminput"
            ref={inputRef}
            type="text"
            name="todo"
            placeholder="Add array elements here"
          />
          <button className="resetbtn" type="submit">
            Add
          </button>
        </form>
        <button className="resetbtn" onClick={resetArray}>
          Random Array
        </button>
      </div>
      <div className="button-container">
        <Bubblesort array={array} setArray={setArray} delay={delay} />{" "}
        <Insertionsort array={array} setArray={setArray} delay={delay} />{" "}
        <Mergesort array={array} setArray={setArray} delay={delay} />{" "}
        <Quicksort array={array} setArray={setArray} delay={delay} />{" "}
        <Selectionsort array={array} setArray={setArray} delay={delay} />{" "}
      </div>
    </div>
  );
}

export default Sorting;
