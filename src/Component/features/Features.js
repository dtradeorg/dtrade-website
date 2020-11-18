import React from 'react'
import './Feature.css';
export default function Features() {
    return (
        <div className="feature-div">
            <h1>Trading, reimagined.</h1>
            <h2>Trade from anywhere. No sign up needed.</h2>

            <div className="row feature-row ">
                <div className="col-12 col feature-col ">
                    <div className="feature-heading">
                        Accessible
                    </div>
                    <div className="feature-body">
                    Gain on-chain exposure to hundreds <br className="mobile-switch"/> of assets from around the world.
                                        </div>
                </div>

                <div className="col-12 col feature-col ">
                    <div className="feature-heading">
                    Low Fees                    
                    </div>
                    <div className="feature-body">
                    Pay less than 20 cents in GAS fees <br className="mobile-switch"/>  on every transaction.                    
                    </div>
                </div>


                <div className="col-12 col feature-col ">
                    <div className="feature-heading">
                        Unlimited Liquidity
                    </div>
                    <div className="feature-body">
                    Zero slippage by trading assets backed by a distributed collateral pool
                    </div>
                </div>

            </div>

            <div className="row text-left  imp-disc">
            <div className="info mt-5">
                <a href="#disclosure-div" className="to-disc-link left">

                    <img src="./assets/images/info1.svg" alt="i" className="info-img mr-2 mb-1"></img>
                        View Important Disclosures
                        {/* <hr/> */}
                </a>
            </div>
            </div>
            
        </div>

        
    )
}
