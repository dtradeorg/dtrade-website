import React, { Component, useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import './Header.css'


function Header() {

    const [focus, setFocus] = useState(false);

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
                        
                    <InputGroup className="mb-3">
                            <FormControl
                            placeholder="name@email.com"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className="inputemail"
                            onFocus={()=>setFocus(true)}
                            onBlur={()=>setFocus(false)}
                            style={{
                                border:  focus ? "1px solid #69ABE8" : "1px solid rgba(120, 120, 120, 0.2)",
                                borderRight: focus ? "none" : "none", 
                                transition: "0.5s",
                                backgroundColor: focus ? "#fafafa" : "#fafafa",
                            }}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2"
                                    style={{
                                        border:  focus ? "1px solid #69ABE8" : "1px solid rgba(120, 120, 120, 0.2)",
                                        borderRight: focus ? "none" : "none", 
                                        transition: "0.5s",
                                        backgroundColor: focus ? "#fafafa" : "#fafafa",

                                    }}
                                >Get Updates  
                                    <img src="./assets/images/Header/chevron right.svg" alt="" className=' arrow-ml-small'/>    
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    
                    </div>
               
                        <img className="map img-fluid" src="./assets/images/Header/map2.svg" alt="map"></img>
                    

                </div>

            </div>
        )
    }



export default Header
