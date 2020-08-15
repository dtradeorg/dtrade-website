import React from 'react'
import './Feature.css';
export default function Features() {
    return (
        <div className="feature-div">
            <h1>Trading, reimaniged</h1>
            <h2>Trade hundreds of assets with just $5.</h2>

            <div className="row feature-row ">
                <div className="col-12 col-md-4 col-lg-3 col-lg-3 mr-lg-5">
                    <div className="feature-heading">
                        Any Asset Class
                    </div>
                    <div className="feature-body">
                        Gain exposure to assets in any part of the globe, from football clubs in Italy to stocks in China
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3 mr-lg-5">
                    <div className="feature-heading">
                        Fractional Shares
                    </div>
                    <div className="feature-body">
                        Trade only parts of a whole share, and build a balanced portfolio with as little as $5
                    </div>
                </div>


                <div className="col-12 col-md-4 col-lg-3">
                    <div className="feature-heading">
                        Unlimited Liquidity
                    </div>
                    <div className="feature-body">
                        No slippage and infinite liquidity by trading assets backed by a distributed collateral pool
                    </div>
                </div>

            </div>

            <div className="info mt-5">
                <img src="./assets/images/info.svg" alt="i" className="info-img "></img>
                    View Important Disclosures
                <hr></hr>
            </div>
            
        </div>

        
    )
}
