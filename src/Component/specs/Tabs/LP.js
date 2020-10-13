import React from 'react'
import '../Specs.css'
import { Animated } from 'react-animated-css'


function LP() {
    return (
        <div className="col-11">
                        <Animated animationIn="fadeIn" animationOut="fadeOut" >

                        <div className="row align-items-center">
                            <div className="col-8 text-center">
                                <img className='img-fluid tablet' src="./assets/images/Specs/liquid.png" alt=""></img>
                            </div>
                            <div className="col-4">
                                <h1 className="reward-heading">Provide Liquidity</h1>
                                <p className="reward-text">
                                    Earn liquidity pool rewards by providing liquidity to DET and synthetic asset pools.
                                </p>

                                <h3 className="apy-info"> <img alt="i" src="./assets/images/Specs/info.svg" className="img-fluid mr-2 mb-1"/> Currently APY: 67.87%</h3>
                                

                            </div>
                        </div>
                        
                        </Animated>

                    </div>
    )
}

export default LP
