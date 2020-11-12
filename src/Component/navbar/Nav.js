import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './Navbar.css'
function NavBar()  {

    
        return (
            <Navbar  className=" " expand="md">
                                                     
                <Nav className="logo">
                    <img src="./assets/images/Navbar/Union.svg" alt="logo" className="img-fluid logo"/>
                </Nav>
                <Nav className="ml-auto mr-auto">
                            <h3 className="d-none d-md-block">
                                Launching Q1 2021
                            </h3>                
                </Nav>      
                <Nav>
                    <a href="http://stakr.dtrade.org/" target="_blank" rel="noopener noreferrer" className="ml-4 link">
                            Launch App
                            <img className="ml-arrow mb-1" src="./assets/images/arrow-top-right.svg" alt="arrow"></img>
                        </a>
                    <a href="https://medium.com/dtrade"  target="_blank" rel="noopener noreferrer" >  
                    <img src="./assets/images/Navbar/dUSD.svg" alt="logo" className="img-fluid social-link-margin"/>
                    </a>  
                    <a href="https://twitter.com/dtradeorg"  target="_blank" rel="noopener noreferrer">
                    <img  src="./assets/images/Navbar/dUSD-1.svg" alt="logo" className="img-fluid social-link-margin"/>
                    </a>
                    <a href="https://github.com/dtradeorg"  target="_blank" rel="noopener noreferrer">
                    <img  src="./assets/images/Navbar/dUSD-2.svg" alt="logo" className="img-fluid social-link-margin"/>
                    </a>
                    <a href="https://discord.gg/hyS8E7BPT6"  target="_blank" rel="noopener noreferrer">
                    <img  src="./assets/images/Navbar/dUSD-3.svg" alt="logo" className="img-fluid social-link-margin"/>
                    </a>
                    <a href="https://commonwealth.im/dtrade"  target="_blank" rel="noopener noreferrer">
                    <img  src="./assets/images/Navbar/dUSD-4.svg" alt="logo" className="img-fluid social-link-margin"/>
                    </a>
                </Nav>        

            </Navbar>
            
        )
    }



export default NavBar

