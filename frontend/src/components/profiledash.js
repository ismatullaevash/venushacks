import React from "react";
import { Link } from "react-router-dom";
import companyInfo from "./companyInfo";
import "../styles/profiledash.css";

function profiledash() {
  return (
    <div>
    <div class="topnav">
      <a id="FinFam" href="FinFam">FinFam</a>
    </div>



    <div class="row">
        <div class="column1">
          <div class="card">
          <img src={logo} alt="Logo"/>
          <p id="profileinfo">
            Name: Test
          </p> 
          <p id="profileinfo">
            DOB: 01/01/2000
          </p> 
          <p id="profileinfo">
            Address: 123 Lane Street
          </p> 
          <p id="profileinfo">
            Interests: Reading, writing
          </p> 
          <p id="profileinfo">
            Wishes: A new bike!
          </p> 
          </div>
        </div>
        <div class="column2">
          <div class="card">
            <div class="rows1-3">

              <div class="row1">
                <p id="word">
                    Family
                </p>
                <table>
                    <tr>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

              <div class="row2">
              <p id="word">
                   Badges
                </p>
                <table>
                    <tr>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

              <div class="row3">
              <p id="word">
                Acheivements
                </p>
              <table>
                    <tr>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                      <td><img src={logo2} alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

            </div>
          </div>
        </div>
       
      </div>
      </div>
  );
}
export default profiledash;
