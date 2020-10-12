import React from 'react'
import '../Specs.css'
import { Animated } from 'react-animated-css'


function Reward() {
    return (
        <div className="col-11">

            <Animated animationIn="fadeIn" animationOut="fadeOut" >

                        <div className="row align-items-center">
                            <div className="col-8 text-center">
                                <img className='img-fluid tablet' src="./assets/images/Specs/banner-img.svg" alt=""></img>
                            </div>
                            <div className="col-4">
                                <h1 className="reward-heading">Earn rewards.</h1>
                                <p className="reward-text">
                                Earn rewards and collect your share of
                                trading fees by staking DET and providing
                                collateral to the dtrade protocol.
                                </p>

                                <h3 className="apy-info"> <img alt="i" src="./assets/images/Specs/info.svg" className="img-fluid mr-2 mb-1"/> Currently APY: 67.87%</h3>
                                

                            </div>
                        </div>
                        </Animated>
                    </div>
    )
}

export default Reward
