import React from 'react'
import '../Specs.css'
import { Animated } from 'react-animated-css'

function TradeMobile() {
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" > 

        <div className="row align-items-center justify-content-center">



                            <div className="col-6 text-center">
                                <img className='img-fluid tablet' src="./assets/images/Specs/banner-img.svg" alt=""></img>
                            </div>
                            <div className="col-12 justify-content-center mt-3">
                                <h1 className="text-center reward-heading">Earn rewards.</h1>
                                <p className="reward-text text-center">
                                Earn rewards and collect your share of
                                trading fees by staking DET and providing
                                collateral to the dtrade protocol.
                                </p>

                                <h3 className="apy-info text-center"> <img alt="i" src="./assets/images/Specs/info.svg" className="img-fluid mr-2 mb-1"/> Currently APY: 67.87%</h3>
                                

                            </div>
                        </div>
                        </Animated>

    )
}

export default TradeMobile
