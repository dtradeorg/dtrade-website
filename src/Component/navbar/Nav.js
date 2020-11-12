import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './Navbar.css'
class NavBar extends Component {
    render() {
        return (
            <Navbar  className=" " expand="md">
                                                     
                <Nav className="">
                    <img src="./assets/images/Navbar/Union.svg" alt="logo" className="img-fluid"/>
                </Nav>
                <Nav className="ml-auto mr-auto">
                            <h3 className="d-none d-md-block">
                                Launching Q1 2021
                            </h3>                
                </Nav>      
                <Nav>
                    <a href="http://stakr.dtrade.org/" target="_blank" rel="noopener noreferrer" className="ml-4">
                            Launch App
                            <img className="ml-arrow mb-1" src="./assets/images/arrow-top-right.svg" alt="arrow"></img>
                        </a>
                    <img src="./assets/images/Navbar/dUSD.svg" alt="logo" className="img-fluid"/>
                    <img src="./assets/images/Navbar/dUSD-1.svg" alt="logo" className="img-fluid social-link-margin"/>
                    <img src="./assets/images/Navbar/dUSD-2.svg" alt="logo" className="img-fluid social-link-margin"/>
                    <img src="./assets/images/Navbar/dUSD-3.svg" alt="logo" className="img-fluid social-link-margin"/>
                    <img src="./assets/images/Navbar/dUSD-4.svg" alt="logo" className="img-fluid social-link-margin"/>
                </Nav>        

            </Navbar>
            
        )
    }
}


export default NavBar

