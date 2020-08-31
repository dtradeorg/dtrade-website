import React from 'react'
import './Options.css'
export default function Options() {
    return (
        <div className="options-div text-center">
            <h1>View Asset Classes</h1>
            <div className="container">
                <div className="row options-values justify-content-center">
                    <div className="col-6 col-lg flex-column  mb-5 mb-lg-0 ">
                        <img src="/assets/images/Options/equities.svg" alt="Equities"></img>
                        <div>Equities</div>
                    </div>
                    <div className="col-6 col-lg flex-column  mb-5 mb-lg-0">
                        <img src="/assets/images/Options/currencies.svg" alt="Currencies"></img>
                        <div>Currencies</div>
                    </div>
                    <div className="col-6 col-lg-2 flex-column  mb-5 mb-lg-0">
                        <img src="/assets/images/Options/commodities.svg" alt="Commodities"></img>
                        <div>Commodities</div>
                    </div>
                    <div className="col-6 col-lg flex-column   mb-5 mb-lg-0">
                        <img src="/assets/images/Options/reits.svg" alt="REITs"></img>
                        <div>REITs</div>
                    </div>

                    <div className="col-lg flex-column mr-0">
                        <img src="/assets/images/Options/options.svg" alt="options"></img>
                        <div>Options</div>
                    </div>
                </div>
            </div>

            <div className="info mx-auto">
            <a href="#disclosure-div" className="to-disc-link left-options">

                <img src="./assets/images/info.svg" alt="i" className="info-img"></img>
                Options Risk Disclosure
                <hr/>
                </a>
                
            </div>

        </div>
    )
}
