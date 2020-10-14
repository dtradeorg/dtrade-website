import React from 'react'
import '../Specs.css'
import { Animated } from 'react-animated-css'

function LP() {
    return (
        <div className="col-11">
                        <Animated animationIn="fadeIn" animationOut="fadeOut" >

                        <div className="row align-items-center">
                            <div className="col text-center tablet-container">
                                <img className='img-fluid tablet' src="./assets/images/Specs/liquid.png" alt=""/>
                                 
                            </div>
                            <div className="col-5">
                                <h1 className="reward-heading">Provide Liquidity</h1>
                                <p className="reward-text">
                                    Earn liquidity pool rewards by providing liquidity to DET and synthetic asset pools.
                                </p>

                                

                            </div>
                        </div>
                        
                        </Animated>

                    </div>
    )
}

export default LP
