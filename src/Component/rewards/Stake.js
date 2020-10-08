import React from 'react'
import './Stake.css'

function Stake() {
    return (
        <div id="stake" className="container-fluid">
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-2 text-center">
                        
                        <div className="row pb-4">
                            <div className="col">
                                <img id="arrow-up" className="img-fluid" src="./assets/images/Stake/arrow-left.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-2">
                            <div className="col">
                                <img src="./assets/images/Stake/Frame 145.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-2">
                            <div className="col">
                                <img src="./assets/images/Stake/Frame 146.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-2">
                            <div className="col">
                                <img src="./assets/images/Stake/Frame 147.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-4">
                            <div className="col">
                                <img id="arrow-down" className="img-fluid" src="./assets/images/Stake/arrow-right.svg" alt=""></img>
                            </div>
                            
                        </div>

                        
                        
                    </div>
                    <div className="col-10">
                        <div className="row align-items-center">
                            <div className="col-6 text-center">
                                <img className='img-fluid' src="./assets/images/Stake/banner-img.svg" alt=""></img>
                            </div>
                            <div className="col-6">
                                <h1>Earn rewards.</h1>
                                <p className="ptag">
                                Earn rewards and collect your share of
                                trading fees by staking DET and providing
                                collateral to the dtrade protocol.
                                </p>
                                

                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Stake
