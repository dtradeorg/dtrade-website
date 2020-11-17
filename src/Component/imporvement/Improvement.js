import React from 'react'
import './Improvement.css'


function Improvement() {
    return (
        <div id="improvement-div">
            <h1>Community run and self-improving.</h1>
            <p>DET holders can vote on protocol upgrades, public goods in the dtrade ecosystem,
                <br className="mobile-switch"/>
                and new asset integrations. The community has expressed interest in:</p>    

            <div className="container pt-3">

                <div className="row text-center justify-content-center">
                    <img src="/assets/images/Improvement/Timeline.svg" alt="timeline"  className="img-fluid mt-5 mb-5 d-none d-md-block"/>
                    <img src="/assets/images/Improvement/timelineMob.svg" alt="timeline" className="img-fluid mt-4 mb-4 d-md-none"/>
                </div>

                <div className="row text-center mt-4">
                    <div className="col">
                    <a href="https://discord.gg/hyS8E7BPT6"  target="_blank" rel="noopener noreferrer" className="link-community">
                        Join the conversation
                        <img src="/assets/images/right-blue.svg" alt="arrow" className="mb-1 ml-arrow"></img>

                    </a>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Improvement
