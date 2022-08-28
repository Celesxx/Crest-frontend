import 'assets/index.assets.css';
import 'assets/global.assets.css';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/blocks/navbar.components.jsx"
import Cards from "components/blocks/cards.components.jsx"
import Statistic from "components/blocks/statistic.components.jsx"

class Index extends React.Component 
{
  render()
    {
      return(
        <div class="home p1">

          <Navbar></Navbar>

          <div class="home-body flex column">
            <div class="home-core flex column center">

              <div class="home-title">
                <h1 class="h1 title-small">The next </h1> 
                <h1 class="h1 title-big"> Generation </h1>
                <h1 class="h1 title-small"> of video games </h1>
              </div>

              <div class="home-description flex column center">
                <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, </p>
              </div>

              <div class="home-button flex row center">
                <div class="button-input flex row center"> <p>Launch Dapp</p> </div>
              </div>
              
            </div>
          </div>

          <div class="home-background-p1">
            <div class="background-texture-p1"></div>
            <div class="background-rect-p1"></div>
            <div class="background-circle-p1"></div>
          </div>

          <div class="home-background-p2">
            <div class="background-texture-p2"></div>
            <div class="background-rect-p2"></div>
            <div class="background-circle-p2"></div>
          </div>

          <div class="home-ellipse flex column center">
            <div class="ellipse l1"></div>
          </div>
          
          <div class="home-ellipse flex column center">
            <div class="ellipse l2"></div>
          </div>

          <div class="home-ellipse flex column center">
            <div class="ellipse l3"></div>
          </div>

          <Cards></Cards>

          <Statistic></Statistic>

        </div>

      );
    }
}

export default Index;
