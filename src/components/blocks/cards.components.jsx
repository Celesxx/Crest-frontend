import 'assets/blocks/cards.assets.css';
import 'assets/global.assets.css';
import 'assets/index.assets.css';
import React from "react";
import { Link } from 'react-router-dom';

class Cards extends React.Component 
{
  render()
    {
      return(
        <div class="home p2">
            <div class="cards-core flex row center">
                
                <div class="cards flex column center">
                    <div class="cards-content flex column center">

                        <div class="cards-icons"></div>
                        <div class="cards-title">
                            <h1>Liquidity Manager</h1>
                        </div>
                        <div class="cards-desc">
                            <p>Description Description Description Description Description Description Description Description</p>
                        </div>
                        <div class="cards-link-core">
                            <Link to="/charts" class="link flex row center cards-link">
                                <a>Look the charts</a>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4091 7L18.5 12M18.5 12L13.4091 17M18.5 12L6.5 12" stroke="#B982FF" stroke-width="2" stroke-linecap="square"/>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div class="cards flex column center">
                    <div class="cards-content flex column center">

                        <div class="cards-icons"></div>
                        <div class="cards-title">
                            <h1>Market Place</h1>
                        </div>
                        <div class="cards-desc">
                            <p>Description Description Description Description Description Description Description Description</p>
                        </div>
                        <div class="cards-link-core">
                            <Link to="/charts" class="link flex row center cards-link">
                                <a>Discover the Market Place</a>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4091 7L18.5 12M18.5 12L13.4091 17M18.5 12L6.5 12" stroke="#B982FF" stroke-width="2" stroke-linecap="square"/>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div class="cards flex column center">
                    <div class="cards-content flex column center">

                        <div class="cards-icons"></div>
                        <div class="cards-title">
                            <h1>Deflationary</h1>
                        </div>
                        <div class="cards-desc">
                            <p>Description Description Description Description Description Description Description Description</p>
                        </div>
                        <div class="cards-link-core">
                            <Link to="/charts" class="link flex row center cards-link">
                                <a>Total Burn</a>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4091 7L18.5 12M18.5 12L13.4091 17M18.5 12L6.5 12" stroke="#B982FF" stroke-width="2" stroke-linecap="square"/>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      );
    }
}

export default Cards;
