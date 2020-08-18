import React from 'react'
import './Vision.css'
export default function Vision() {
    return (
        <div className="container text-center vision-div">

            <h1>Trading for everyone, anywhere.</h1>
            <div className="mx-auto vision-statement">dTrade provides you exposure to Juventus, Tencent, Apple, Yen, Euro, Ethereum, Base Metals, and many more asset classes</div>
            <div className="info mx-auto">
               <a href="#disclosure-div" className="to-disc-link">
                <img src="./assets/images/info.svg" alt="i" className="info-img"></img>
               
                View Important Disclosures
                <hr ></hr>
              </a>
            </div>
            
        </div>
    )
}
