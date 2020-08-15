import React from 'react'
import './Portfolio.css';
export default function Portfolio() {
    return (
        <div className="portfolio-div">
            <div className="container-fluid row mx-auto px-0 ">
                <div className="col-12 col-md  portfolio-card prediction">
                    <div className="porject-title ">Prediction Platform</div>
                    <div className="porject-des ">Make predictions on markets, economics, sports and more</div>
                    <div className="project-date ">Launching 2021</div>

                </div>
                <div className="col-12 col-md portfolio-card staking card-ml">

                    <div className="porject-title">Staking</div>
                    <div className="porject-des">Stake DET and collect fees</div>
                    <div className="project-date">
                        <a href="/#" >
                            Start Staking 
                            <img src="/assets/images/arrow.svg" alt="arrow" className="arrow-ml"></img>
                        </a>
                    </div>


                </div>
            </div>


            <div className="container-fluid row mx-auto px-0 ">
                <div className="col-12 col-md  portfolio-card dtrade ">
                    <div className="porject-title ">dTrade</div>
                    <div className="porject-des ">Learn more about the dTrade Protocol</div>
                    <div className="project-date ">
                        <a href="/#">
                            <img src="/assets/images/Portfolio/git.svg" className="img-fluid mr-3" alt="git"></img>
                            GitHub
                            <img src="/assets/images/arrow.svg" alt="arrow" className="arrow-ml"></img>
                        </a>
                    </div>

                    <div className="project-date ">
                        <a href="/#">
                            Read White Paper 
                            <img src="/assets/images/arrow.svg" alt="arrow" className="arrow-ml"></img>
                        </a>
                    </div>

                </div>
                <div className="col-12 col-md portfolio-card loan card-ml">

                    <div className="porject-title">Loans</div>
                    <div className="porject-des">Instant credit lines using multiple supported collaterals</div>
                    <div className="project-date" style={{opacity: 0.35}}>Launching 2021</div>


                </div>
            </div>
            
        </div>
    )
}
