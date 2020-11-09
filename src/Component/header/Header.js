import React, { Component } from 'react'
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div  className="conatiner-fluid header">

                <p className='join-banner'>Join us in reimagining finance. 
                    <a href="https://dtrade.breezy.hr/p/beb3fbc6d13d-software-engineer" 
                    target="_blank"  
                    rel="noopener noreferrer"
                    className="blue-anchor"> View open positions
                    <img src="./assets/images/Header/chevron right.svg" alt="" className='chevright'/>    
                    </a>
                    
                </p>

                <div className="container text-center hero"> 

                    <h1>Trade Any Market</h1>
                    <div className="sub-heading">Polkadot Derivatives & Margin Trading<sup className="sup-1">1</sup></div>

                    <div className="row justify-content-center">
                        <a href="https://github.com/dtradeorg" target="_blank" rel="noopener noreferrer" >
                            Learn More
                            <img  className="mb-1" src="./assets/images/chevron-right-small-blue.svg" alt="arrow"></img>
                        
                        </a>
                        <a href="http://stakr.dtrade.org/" target="_blank" rel="noopener noreferrer" className="ml-4">
                            Launch App
                            <img className=" mb-1" src="./assets/images/arrow-top-right.svg" alt="arrow"></img>
                        </a>
                    </div>
               
                        <img className="map img-fluid" src="./assets/images/Header/map2.svg" alt="map"></img>
                    

                </div>

            </div>
        )
    }

}

export default Header
