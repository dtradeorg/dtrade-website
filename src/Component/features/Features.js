import React from 'react'
import './Feature.css';
export default function Features() {
    return (
        <div className="feature-div">
            <h1>Trading, reimagined</h1>
            <h2>Trade hundreds of assets with just $5.</h2>

            <div className="row feature-row ">
                <div className="col-12 col-md-4 col-lg-3 col-lg-3 mr-lg-5">
                    <div className="feature-heading">
                        Accessible
                    </div>
                    <div className="feature-body">
                    Gain on-chain exposure to hundreds of assets from anywhere in the world.
                                        </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3 mr-lg-5">
                    <div className="feature-heading">
                    Low Feels                    
                    </div>
                    <div className="feature-body">
                    Pay less than 20 cents in GAS fees on every transaction.                    
                    </div>
                </div>


                <div className="col-12 col-md-4 col-lg-3">
                    <div className="feature-heading">
                        Unlimited Liquidity
                    </div>
                    <div className="feature-body">
                    No slippage and infinite liquidity by trading assets backed by a distributed collateral pool                    </div>
                </div>

            </div>

            <div className="row text-left ml-md-2 imp-disc">
            <div className="info mt-5">
                <a href="#disclosure-div" className="to-disc-link text-gray left">

                    <img src="./assets/images/info1.svg" alt="i" className="info-img mr-2 mb-1"></img>
                        View Important Disclosures
                        {/* <hr/> */}
                </a>
            </div>
            </div>
            
        </div>

        
    )
}
