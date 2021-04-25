import React from "react";
import "../styles/WishList.css";
import fireb from "./fire";
import { Redirect } from "react-router-dom";

function WishList ()  {
return(
    <div>
<div class="topnav">
      <a id="FinFam" href="#">FinFam</a>
      <a id="tasks" href="/tasks">My Tasks</a>
      <a id="tasks" href="/wishlist">My WishList</a>
    </div>
    <div class="row">
        <div class="column1">
        <p id="profileinfo">
            Current Wishes
          </p> 
                <table>
                    <tr>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903514684817468/unknown.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903555986391080/unknown.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903587754049547/unknown.png" alt="Logo" id="logo2"/></td>
                    </tr>
                </table>
        </div>
        </div>
        <div class="column1">
        <p id="profileinfo">
            Acheived Wishes
          </p>
          <table>
                    <tr>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903514684817468/unknown.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903555986391080/unknown.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835903587754049547/unknown.png" alt="Logo" id="logo2"/></td>
                    </tr>
                </table> 
        </div>
    </div>
    
);
}
export default WishList;