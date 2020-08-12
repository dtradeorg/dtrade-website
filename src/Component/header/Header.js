import React, { Component } from 'react'
import './Header.css'
import Progress from '../ProgressBar/Progress'
class Header extends Component {
    render() {
        return (
            <div  className="conatiner-fluid header">

                <div className="container text-center"> 

                    <h1>Trade Any Market</h1>
                    <div className="sub-heading">A protocol for trading synthetic assets on Edgeware</div>

                    <div>
                        <a href="/#">
                            Start Trading
                            <img  className="arrow-ml" src="./assets/images/arrow-blue.svg" alt="arrow"></img>
                        
                        </a>
                        <a href="/#" className="ml-4">
                            Start Staking
                            <img className="arrow-ml" src="./assets/images/arrow-blue.svg" alt="arrow"></img>
                        </a>
                    </div>
                    <img className="map-mt img-fluid" src="./assets/images/Header/map.svg" alt="map"></img>

                    

                </div>

                <div className="text-center" id="progress-div">
                    <Progress></Progress>
                </div>
                
                
                
            </div>
        )
    }
}

export default Header
