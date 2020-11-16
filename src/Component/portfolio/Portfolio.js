import React from 'react'
import './Portfolio.css';
export default function Portfolio() {
    return (
        <div className="portfolio-div">
            <div className="container-fluid row mx-auto px-0 ">
                {/* <div className="col-12 col-md  portfolio-card prediction">
                    <div className="porject-title ">Prediction Platform</div>
                    <div className="porject-des ">Gain trading insights and <br className="mobile-switch"/> make informed predictions</div>
                    <div className="project-date ">
                        <button className="btn date-btn"> Launching 2021</button>
                    </div>

                </div> */}
                <div className="col-12 col-md  portfolio-card dtrade ">
                    <div className="porject-title">dtrade</div>
                    <div className="porject-des">Learn more about the <br className="mobile-switch"/> dTrade Protocol</div>
                    <div className="project-date">
                        <a href="https://github.com/dtradeorg" target="_blank" rel="noreferrer noopener">
                            <img src="/assets/images/Portfolio/git.svg" className="img-fluid mr-3 mb-1" alt="git"></img>
                            GitHub
                            <img src="/assets/images/arrow-black.svg" alt="arrow-black" className="mb-1"></img>
                        </a>
                    </div>

                    <div className="project-date-dtrade ">
                        <h3 className="white-paper">
                            Read White Paper 
                        </h3>
                        <h3 className="white-paper-2">
                            Available 25 / 11
                        </h3>
                    </div>

                </div>
                <div className="col-12 col-md portfolio-card staking card-ml">

                    <div className="porject-title">Multi-collateral Staking</div>
                    <div className="porject-des">Supported Collaterals</div>
                    
                    <div className="row">
                        <div className="col-12">
                            <img alt="collateral" src="/assets/images/Portfolio/collateral.png" className="img-fluid collateral"/>
                        </div>
        
                    </div>

                    {/* <div className="project-date">
                        <a href="http://stakr.dtrade.org/" target="_blank" rel="noopener noreferrer" className="staking-link" >
                            Launch Test App
                            <img src="/assets/images/arrow-top-right.svg" alt="arrow" className="mb-1 ml-arrow"></img>
                        </a>
                    </div> */}


                </div>
            </div>

{/* 
            <div className="container-fluid row mx-auto px-0 ">
                <div className="col-12 col-md  portfolio-card dtrade ">
                    <div className="porject-title ">dtrade</div>
                    <div className="porject-des ">Learn more about the <br className="mobile-switch"/> dTrade Protocol</div>
                    <div className="project-date ">
                        <a href="https://github.com/dtradeorg" target="_blank" rel="noreferrer noopener">
                            <img src="/assets/images/Portfolio/git.svg" className="img-fluid mr-3 mb-1" alt="git"></img>
                            GitHub
                            <img src="/assets/images/arrow-black.svg" alt="arrow-black" className="mb-1"></img>
                        </a>
                    </div>

                    <div className="project-date-dtrade ">
                        <h3 className="white-paper">
                            Read White Paper 
                        </h3>
                        <h3 className="white-paper-2">
                            Available 25 / 11
                        </h3>
                    </div>

                </div>
                <div className="col-12 col-md portfolio-card loan card-ml">

                    <div className="porject-title">Loans</div>
                    <div className="porject-des-w">Instant credit lines using multiple supported collaterals</div>
                    <div className="project-date" style={{opacity: 0.35}}>Launching 2021</div>

                        <div className="loans-features row m-0">
                            <div className="col">
                                <img src="/assets/images/Portfolio/loans/Frame 141.svg" alt="edgeware"   ></img>
                               
                            </div>
                        </div>
                        <div className="loans-features-mobile row m-0">
                            <div className="col">
                                <img src="/assets/images/Portfolio/loans/GroupPort.svg" alt="edgeware" className="img-fluid" ></img>
                               
                            </div>
                        </div>

                </div>
            </div>
             */}
        </div>
    )
}
