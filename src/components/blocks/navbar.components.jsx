import 'assets/blocks/navbar.assets.css';
import 'assets/global.assets.css';
import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component 
{
  render()
    {
      return(
          <div class="navbar flex row">

            <div class="navbar-logo flex row">
              <div class="navbar-logo-core flex row">
                <p>logo</p>
              </div>
            </div>

            <div class="navbar-link flex row">
              <Link to="/home" class="link"><a>Home</a></Link>
              <Link to="/doc" class="link"><a>Doc</a></Link>
              <Link to="/charts" class="link"><a>Charts</a></Link>
            </div>

            <div class="navbar-button flex row">
              <div class="navbar-button-core flex row">
                <div class="button market-button flex row center"> <p>Buy/Sell</p> </div>
                <div class="button dapp-button flex row center"> <p>Launch Dapp</p> </div>
              </div>
            </div>

          </div>

      );
    }
}

export default Navbar;
