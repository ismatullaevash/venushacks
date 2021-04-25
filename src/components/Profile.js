import React from "react";
import fireb from "./fire";
import { Redirect } from "react-router-dom";
import "../styles/profiledash.css";
function Profile (props)  {
  //const[handleLogOut]=props;
    /*let user = fireb.auth().currentUser;

  if (user != null) {
    return (<>
      <div>{user.email}</div>
    </>);
  } else {
    return (<Redirect to={{ pathname: "/" }} />);

  }*/
  return <div> 
    <div class="topnav">
      <a id="FinFam" href="#">FinFam</a>
      <a id="logout" onClick={props.handleLogOut}>LogOut</a>
      <a id="tasks" href="/tasks">My Tasks</a>
    </div>



    <div class="row">
        <div class="column1">
          <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFBquP9LwzPmoSnGRbyeaKzvBxMBd_JX1Eg&usqp=CAU" alt="Logo"/>
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
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

              <div class="row2">
              <p id="word">
                   Badges
                </p>
                <table>
                    <tr>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

              <div class="row3">
              <p id="word">
                Acheivements
                </p>
              <table>
                    <tr>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dYe87cLhmtFLLVaMpzvcBjPlUWmDP9DNyA&usqp=CAU" alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
              </div>

            </div>
          </div>
        </div>
       
      </div>

  </div>
  };
  
  export default Profile;