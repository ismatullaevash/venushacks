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
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835923829121482763/cake-slice.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835923839438946314/gift-box.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835923843779657769/guitar.png" alt="Logo" id="logo2"/></td>
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
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835923850465247296/teddy-bear.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835924347180154920/dress.png" alt="Logo" id="logo2"/></td>
                      <td><img src="https://cdn.discordapp.com/attachments/834912135246118918/835924350187995146/muffin.png" alt="Logo" id="logo2"/></td>
                    </tr>
                </table> 
        </div>
    </div>
    
);
}
export default WishList;