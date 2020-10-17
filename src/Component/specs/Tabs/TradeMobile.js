import React from 'react'
import '../Specs.css'
import { Animated } from 'react-animated-css'

function TradeMobile() {
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" > 

        <div className="row align-items-center justify-content-center">
                            <div className="col-12 justify-content-center text-center tab-sec-mobile">
                            <h1 className="reward-heading text-center">Trade</h1>
                                <p className="reward-text text-center">
                                Gain access to all financial markets, short-selling, and margin trading with zero slippage.
                                <br/>
                                <br/>
                                From anywhere in the world.
                                </p>

                                <img className='img-fluid tablet-trade' src="./assets/images/Specs/trade.png" alt=""></img>


                            </div>
                        </div>
                        </Animated>

    )
}

export default TradeMobile
