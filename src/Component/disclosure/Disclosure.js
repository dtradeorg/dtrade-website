import React from 'react'
import './Disclosure.css'

export default function Disclosure() {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    
    
    return (
        <div className="disclosure-div">
            <div className ="container-md disclosure-section">
                <div>Important Disclosures:</div>

                <div className="disclosure-points disclosure-mt">
                    <div>i) All assets on our platform involve a degree of risk and may result in the partial or total loss of your investment.</div>
                    <div>ii) Fees for running on Edgeware cannot be estimated accurately at this time but should be significantly less than protocols built on Ethereum. Initially there may be no GAS fees at all.</div>
                    <div>iii) We round of holdings of fractional shares to the fourth decimal place. We also do not accept synthetic dollar purchases of less than $1 tUSD.</div>
                    <div>iv) The collarteralization ratio maybe change over time.</div>

                    <div className="disclosure-mt">The supported collaterals for loans may change upon launch in 2021, and initially it maybe only be a subset of the ones mentioned above.</div>
                    <div className="disclosure-mt">dTrade (c) is a decentralized financial platform that aims to provide access to anyone, anywhere wanting to trade any market. 
                        <br/>Our alpha launch will only have select equities from NYSE, HKEX, TYO, and select crypto assets and commodes.
                        <br/> By using this website, you are agreeing to our Terms of Use and Privacy Policy.</div>
                </div>

                <hr className="disclosure-hr"/>

                <h1 className="disclosure-message">We’re building the world’s<br/> most accessible financial company.</h1>

                <div className="disclosure-additional">
                    <a href="#!">Have additional questions?
                        <img src="assets/images/arrow-blue.svg" alt="arrow" className="img-fluid arrow-ml"/>
                    </a>
                </div>

                

            </div>
            <div className="col-12 d-flex justify-content-end">
                    <button className="btn" id="disclosure-totop" onClick={scrollTop}>
                        To the top
                    </button>
            </div>
        </div>
    )
}
