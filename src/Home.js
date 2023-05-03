import React from "react";
import logo from "./Group 4.svg";
import btnsorting from "./btnsorting.svg";
import btncompare from "./btn-compare.svg";
import btnnqueen from "./btn-nqueen.svg";
import "./home.css";

function Home() {
  return (
    <>
      {/* <div>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sorting">Sorting</a>
        </li>
      </div> */}
      <div className="mainw">
        <div className="leftc">
          <div className="home-head">
            <h1>VisualAlgo</h1>
            <div className="logoc">
              <img className="home-logo" src={logo} />
            </div>
          </div>
          <div className="hero-section">
            <h2>
              <span style={{ color: "#A6FF16", fontSize: "60px" }}>
                Discover
              </span>{" "}
              <br></br>the beauty <br></br>of Algorithms
            </h2>
            <span className="home-info">
              VisualAlgo is tool that visualize <br></br>algorithms through
              interactive<br></br>
              animations.<br></br>
            </span>
            <button className="home-button">About Project</button>
          </div>
        </div>
        <div className="rightc">
          <div className="right-w">
            <a href="/sorting">
              <div className="home-card" id="card-sorting">
                <img
                  className="home-btn-sorting"
                  src={btnsorting}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>
            <a href="/sorting2">
              <div className="home-card">
                <img
                  src={btncompare}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>
            <a href="/backtracking">
              <div className="home-card">
                <img
                  src={btnnqueen}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>

            <a href="/searching">
              <div className="home-card"></div>
            </a>

            <div className="home-card"></div>
            <div className="home-card"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
