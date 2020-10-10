import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import './Navbar.css'
class NavBar extends Component {
    render() {
        return (
            <Navbar  className="justify-content-between" expand="md">
               
                {/* <Navbar.Toggle aria-controls="nav-items">Menu</Navbar.Toggle> */}
                    
                        


                        <div className="nav-logo mx-auto  ">
                            <img src="./assets/images/Navbar/logo.svg" alt="logo"></img>

                        </div>


                        <div>
                            <h3 className="d-none d-md-block">
                                Launching Q4 2020
                            </h3>
                        </div>


                        
    
            </Navbar>
            
        )
    }
}


export default NavBar

