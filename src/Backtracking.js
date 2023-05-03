import React, { useState, useEffect } from "react";
import "./backtrack.css";

function App() {
  const [size, setSize] = useState(7);
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, [size]);

  useEffect(() => {
    const bars = document.getElementsByClassName("square");
    for (let i = 0; i < array.length; i++) {
      const r = Math.floor(i / size);
      const c = i % size;
      if ((r + c) % 2 === 0) {
        bars[i].style.backgroundColor = "#0F7B98";
      } else {
        bars[i].style.backgroundColor = "#56D0D0";
      }
      if (array[i] === 1) {
        bars[i].style.backgroundColor = "red";
      }
    }
  }, [array, size]);

  const resetArray = () => {
    const newArray = new Array(size * size).fill(0);
    setArray(newArray);
  };

  const safe = (newarray, row, col) => {
    for (let i = col + row * size - 1; i >= row * size; i--) {
      if (newarray[i] === 1) {
        return false;
      }
    }

    for (let i = row * size + col - (size + 1); i >= 0; i -= size + 1) {
      if (newarray[i] === 1) {
        return false;
      }
    }

    for (
      let i = row * size + col + (size - 1);
      i < size * size;
      i += size - 1
    ) {
      if (newarray[i] === 1) {
        return false;
      }
    }
    return true;
  };

  const solve = async (col) => {
    const bars = document.getElementsByClassName("square");
    if (col === size) {
      return true;
    }
    let newarray = array;
    for (let i = 0; i < size; i++) {
      bars[i * size + col].style.backgroundColor = "red";
      if (safe(newarray, i, col)) {
        newarray[i * size + col] = 1;
        setArray(newarray);
        bars[i * size + col].style.backgroundColor = "green";
        if (await solve(col + 1)) {
          return true;
        }
        newarray[i * size + col] = 0;
        bars[i * size + col].style.backgroundColor = "red";
        setArray(newarray);
      }
      await new Promise((resolve) => setTimeout(resolve, 500)); // add a delay of 50ms
    }
    setArray(newarray);
    return false;
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSolve = () => {
    resetArray();
    solve(0);
  };

  return (
    <div className="App">
      <div className="head">
        <span className="title">Algorithm Visualizer</span>
        <input
          className="inp"
          type="number"
          id="size"
          name="size"
          min="1"
          max="8"
          value={size}
          onChange={handleSizeChange}
        />
        <button onClick={handleSolve}>Solve</button>
      </div>

      <div className="boardcontainer">
        <div
          className="board"
          style={{ height: `${size * 70}px`, width: `${size * 70}px` }}
        >
          {array.map((value, index) => (
            <div
              className="square"
              key={index}
              style={{ height: `${68}px`, width: `${68}px` }}
            >
              {/* <img className="queen" src={queen} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
