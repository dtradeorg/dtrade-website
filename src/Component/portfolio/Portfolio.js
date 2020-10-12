import React from 'react'
import './Portfolio.css';
export default function Portfolio() {
    return (
        <div className="portfolio-div">
            <div className="container-fluid row mx-auto px-0 ">
                <div className="col-12 col-md  portfolio-card prediction">
                    <div className="porject-title ">Prediction Platform</div>
                    <div className="porject-des ">Gain trading insights and make informed predictions</div>
                    <div className="project-date ">
                        <button className="btn date-btn"> Launching 2021</button>
                    </div>

                </div>
                <div className="col-12 col-md portfolio-card staking card-ml">

                    <div className="porject-title">Staking</div>
                    <div className="porject-des">Stake DET and collect your <br/> share of exchange fees</div>
                    <div className="project-date">
                        <a href="/#" className="staking-link" >
                            Start Staking 
                            <img src="/assets/images/right-blue.svg" alt="arrow" className="ml-2 mb-1"></img>
                        </a>
                    </div>


                </div>
            </div>


            <div className="container-fluid row mx-auto px-0 ">
                <div className="col-12 col-md  portfolio-card dtrade ">
                    <div className="porject-title ">dTrade</div>
                    <div className="porject-des ">Learn more about the <br/> dTrade Protocol</div>
                    <div className="project-date ">
                        <a href="/#">
                            <img src="/assets/images/Portfolio/git.svg" className="img-fluid mr-3" alt="git"></img>
                            GitHub
                            <img src="/assets/images/arrow-black.svg" alt="arrow-black" className="ml-2 mb-1"></img>
                        </a>
                    </div>

                    <div className="project-date ">
                        <a href="/#">
                            Read White Paper 
                            <img src="/assets/images/arrow-black.svg" alt="arrow-black" className="ml-2 mb-1"></img>
                        </a>
                    </div>

                </div>
                <div className="col-12 col-md portfolio-card loan card-ml">

                    <div className="porject-title">Loans</div>
                    <div className="porject-des-w">Instant credit lines using multiple supported collaterals</div>
                    <div className="project-date" style={{opacity: 0.35}}>Launching 2021</div>

                    <div className="loans-features row mx-auto">
                        <div className="col-4 col-lg d-flex flex-column">
                            <img src="/assets/images/Portfolio/loans/edgeware.svg" alt="edgeware" className="img-fluid"></img>
                            <div className="feature-bold">Edgeware </div>
                            <div className="feature-mute">Credit Line </div>
                        </div>

                        <div className="col-4 col-lg d-flex flex-column">
                            <img src="/assets/images/Portfolio/loans/ethereum.svg" alt="edgeware"  className="img-fluid"></img>
                            <div className="feature-bold">Ethereum </div>
                            <div className="feature-mute">Credit Line </div>
                        </div>


                        <div className="col-4 col-lg d-flex flex-column">
                            <img src="/assets/images/Portfolio/loans/chainlink.svg" alt="edgeware"  className="img-fluid"></img>
                            <div className="feature-bold">Chainlink </div>
                            <div className="feature-mute">Credit Line </div>
                        </div>


                        <div className="col-6 pl-5 pl-lg-1  col-xl d-flex flex-column mt-4 mt-xl-0">
                            <img src="/assets/images/Portfolio/loans/dai.svg" alt="edgeware"  className="img-fluid"></img>
                            <div className="feature-bold">Dai </div>
                            <div className="feature-mute">Credit Line </div>
                        </div>

                        <div className="col-6 pr-5 pr-lg-1 col-xl d-flex flex-column mt-4 mt-xl-0">
                            <img src="/assets/images/Portfolio/loans/polka.svg" alt="edgeware"  className="img-fluid"></img>
                            <div className="feature-bold">Polkadot </div>
                            <div className="feature-mute">Credit Line </div>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
    )
}
