import React from "react";
import { Link } from "react-router-dom";
import companyInfo from "./companyInfo";
import "../styles/landing.css";
function Landing() {
  return (
    <div>
        <div className="topnav">
      <a id="FinFam" href="/">FinFam</a>
      <a id="LogIn" href="/signin">Sign Up</a>
    </div>
        
    <p id="info">
      A place for children to learn the basics of personal finance. 
      </p>
      <p id="corevals">
      Our Core Values
      </p>
      
      <div class="row">
      <div class="column">
        <div class="card">
          Involvement 
        </div>
      </div>
      <div class="column">
        <div class="card">
          Responsiblity
        </div>
      </div>
      <div class="column">
        <div class="card">
          Connection
        </div>
      </div>
    </div>
    
    
    <div class="row2">
      <div class="column2">
        <div class="card">
        Encouraging children to explore finances and reach new milestones, all while
        helping children make a purposeful decisions about their pocket money. 
        </div>
      </div>
      <div class="column2">
        <div class="card">
          Children choose their own goals, and how they want to achieve them. 
        </div>
      </div>
      <div class="column2">
        <div class="card">
        Building connections by strengthening the family bond 
        and having more joy through everyday communication
        </div>
      </div>
    </div>
    
    
      
        </div>
        

  );
}
export default Landing;
