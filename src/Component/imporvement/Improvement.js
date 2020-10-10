import React from 'react'
import './Improvement.css'
function Improvement() {
    return (
        <div id="improvement-div">
            <h1>Community run and self-improving.</h1>
            <p>DET holders can use their tokens to vote on protocol upgrades,</p>
            <p>new price feed & asset integrations, and public goods in the dtrade ecosystem.</p>    

            <div className="container pt-3">
                <div className="row text-center">
                    <div className="col">
                    <a href="#disclosure-div" className="disc-link">

                        <img src="./assets/images/infoimp.svg" alt="i" className="info-img mr-3"></img>
                        View Important Disclosures
                    {/* <hr></hr> */}
                    </a>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Improvement
