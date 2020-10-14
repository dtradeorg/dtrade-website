import React from 'react'
import { Animated } from 'react-animated-css'
import '../Specs.css'


function Trade() {
    return (


        <div className="col-11">
                    <Animated animationIn="fadeIn" animationOut="fadeOut" >
                        <div className="row align-items-center">
                            <div className="col-8 text-center">
                                <img className='img-fluid tablet' src="./assets/images/Specs/trade.png" alt=""></img>
                            </div>
                            <div className="col-4">
                                <h1 className="reward-heading">Trade</h1>
                                <p className="reward-text">
                                Gain access to all financial markets, short-selling, and margin trading with zero slippage.
                                From anywhere in the world.
                                </p>

                                 

                            </div>
                        </div>
                        </Animated>           

                    </div>
    )
}

export default Trade
