import 'assets/blocks/statistic.assets.css';
import 'assets/index.assets.css';
import 'assets/global.assets.css';
import React from "react";
import { Link } from 'react-router-dom';

class Statistic extends React.Component 
{
    render()
    {
        return(
        <div class="home flex column centerp2">
            <div class="statistic flex column center">

                <div class="statistic-title">
                    <h1>Our Badges Statistics</h1>
                </div>

                <div class="statistic-description">
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>

                <div class="statistic-card-core flex column center">
                    <div class="statistic-card flex row">
                        <p id="token-name">XNAME Badge</p>
                        <p id="token-items">1345 items</p>
                        <p id="token-holders">897 Holders</p>
                        <p id="token-value">$13,450.00</p>
                        <p id="token-percent">+1.68%</p>
                    </div>

                    <div class="statistic-card flex row">
                        <p id="token-name">???</p>
                        <p id="token-items">0 items</p>
                        <p id="token-holders">0 Holders</p>
                        <p id="token-value">$0</p>
                        <p id="token-percent">+0%</p>
                    </div>

                    <div class="statistic-card flex row">
                        <p id="token-name">???</p>
                        <p id="token-items">0 items</p>
                        <p id="token-holders">0 Holders</p>
                        <p id="token-value">$0</p>
                        <p id="token-percent">+0%</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Statistic;
