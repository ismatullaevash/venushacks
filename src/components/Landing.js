import React from "react";
import "../styles/landing.css";
function Landing() {
  return (
    <div>
        <div className="topnav">
      <a id="FinFam" href="/">FinFam</a>
      <a id="LogIn" href="/signin">Sign Up</a>
    </div>
        
    <div>
      <p id="info">
      A place for children to learn the basics of personal finance. 
      </p>
      <p id="corevals">
      Our Core Values
      </p>
      <div className="row">
      <div className="column">
        <div className="card">
          Involvement 
        </div>
      </div>
      <div className="column">
        <div className="card">
          Responsiblity
        </div>
      </div>
      <div className="column">
        <div className="card">
          Connection
        </div>
      </div>
    </div>
    <div className="row2">
      <div className="column2">
        <div className="card">
        Encouraging children to explore finances and reach new milestones, all while
        helping children make a purposeful decisions about their pocket money. 
        </div>
      </div>
      <div className="column2">
        <div className="card">
          Children choose their own goals, and how they want to achieve them. 
        </div>
      </div>
      <div className="column2">
        <div className="card">
        Building connections by strengthening the family bond 
        and having more joy through everyday communication
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Landing;
