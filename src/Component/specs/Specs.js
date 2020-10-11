import React from 'react'
import './Specs.css'

function Specs() {
    return (
        <div id="stake" className="container-fluid">

            <div className="container pt-5 desktopview">
                <div className="row align-items-center">

                    <div className="col-1 text-center">
                        
                        <div className="row">
                            <div className="col">
                                <img id="arrow-up" className="img-fluid" src="./assets/images/Specs/arrow-up.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img src="./assets/images/Specs/Frame 145.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img src="./assets/images/Specs/Frame 146.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img src="./assets/images/Specs/Frame 147.svg" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img id="arrow-down" className="img-fluid" src="./assets/images/Specs/arrow-down.svg" alt=""></img>
                            </div>
                            
                        </div>

                        
                        
                    </div>
                    <div className="col-11">
                        <div className="row align-items-center">
                            <div className="col-7 text-center">
                                <img className='img-fluid' src="./assets/images/Specs/banner-img.svg" alt=""></img>
                            </div>
                            <div className="col-5">
                                <h1 className="reward-heading">Earn rewards.</h1>
                                <p className="reward-text">
                                Earn rewards and collect your share of
                                trading fees by staking DET and providing
                                collateral to the dtrade protocol.
                                </p>

                                <h3 className="apy-info"> <img alt="i" src="./assets/images/Specs/info.svg" className="img-fluid mr-2 mb-1"/> Currently APY: 67.87%</h3>
                                

                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
       
            <div className="container mobileview">
                    <div className="row align-items-center">
                        <div className="col-12">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-6 text-center">
                                <img className='img-fluid' src="./assets/images/Specs/banner-img.svg" alt=""></img>
                            </div>
                            <div className="col-12 justify-content-center mt-3">
                                <h1 className="text-center reward-heading">Earn rewards.</h1>
                                <p className="reward-text text-center">
                                Earn rewards and collect your share of
                                trading fees by staking DET and providing
                                collateral to the dtrade protocol.
                                </p>

                                <h3 className="apy-info text-center"> <img alt="i" src="./assets/images/Specs/info.svg" className="img-fluid mr-2 mb-1"/> Currently APY: 67.87%</h3>
                                

                            </div>

                            <div className="row mt-2">
                                <div className="col my-auto">
                                    <img id="arrow-up" className="img-fluid" src="./assets/images/Specs/arrow-left.svg" alt=""></img>
                                </div>
                                <div className="col">
                                    <img src="./assets/images/Specs/Frame 145.svg" alt=""></img>
                                </div>
                                <div className="col">
                                    <img src="./assets/images/Specs/Frame 146.svg" alt=""></img>
                                </div>
                                <div className="col my-auto">
                                <img src="./assets/images/Specs/Frame 147.svg" alt=""></img>
                                </div>
                                <div className="col my-auto">
                                <img id="arrow-down" className="img-fluid" src="./assets/images/Specs/arrow-right.svg" alt=""></img>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Specs
