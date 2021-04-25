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
      <div className="rowl">
      <div className="columnl">
        <div className="cardl">
          Involvement 
        </div>
      </div>
      <div className="columnl">
        <div className="cardl">
          Responsiblity
        </div>
      </div>
      <div className="columnl">
        <div className="cardl">
          Connection
        </div>
      </div>
    </div>
    <div className="row2l">
      <div className="column2l">
        <div className="cardl">
        Encouraging children to explore finances and reach new milestones, all while
        helping children make a purposeful decisions about their pocket money. 
        </div>
      </div>
      <div className="column2l">
        <div className="cardl">
          Children choose their own goals, and how they want to achieve them. 
        </div>
      </div>
      <div className="column2l">
        <div className="cardl">
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